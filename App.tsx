import { View, Text } from "react-native"
import HomeScreen from "./components/review/home2";
import DetailScreen from "./components/review/detail2";
import AboutScreen from "./components/review/about2";

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import { OPENSANS_REGULAR } from "./utils/const2";

SplashScreen.preventAutoHideAsync(); //chặn việc tự động ẩn đi

const App = () => {
    const [loaded, error] = useFonts({
        [OPENSANS_REGULAR]: require('./assets/fonts/OpenSans-Regular.ttf'),
        });

        useEffect(() => { //khi vào trang thì cái hàm này nó sẽ chạy đầu tiên
        if (loaded || error) {
        SplashScreen.hideAsync(); //nếu có lỗi xảy ra thì nó sẽ ẩn màn hình chờ đi
        }
        }, [loaded, error]);
        if (!loaded && !error) {
        return null;
        }

    return ( //sau khi vào app thì bắt đầu render những cái bên dưới
        <View>
            <HomeScreen />
            <DetailScreen />
            <AboutScreen />
        </View>
    )
}

export default App;

//đọc thêm tài liệu font của trang gốc expo
//Tạo 1 trang chờ cho app reload font chữ -> Tăng UI, professional hơn
//Hiểu hơn về font chữ từ việc tải nó về và app nó vào