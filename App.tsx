import { View, Text } from "react-native"
import HomeScreen from "./components/review/home2";
import DetailScreen from "./components/review/detail2";
import AboutScreen from "./components/review/about2";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import { OPENSANS_REGULAR } from "./utils/const2";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

SplashScreen.preventAutoHideAsync(); 
const App = () => {
    const [loaded, error] = useFonts({
        [OPENSANS_REGULAR]: require('./assets/fonts/OpenSans-Regular.ttf'),
        });

        useEffect(() => { //chạy đầu tiên
        if (loaded || error) {
        SplashScreen.hideAsync();
        }
        }, [loaded, error]);
        if (!loaded && !error) {
        return null;
        }

    //Điều hướng trang
    const Stack = createNativeStackNavigator();

    return ( //tiếp theo thì bắt đầu render những cái bên dưới
        <NavigationContainer>
            <Stack.Navigator>
                    {/* màn hình 1 */}
                <Stack.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{ title: 'Trang chủ' }} // giúp bạn đổi tên sang tiếng Việt từ 'home' sang 'trang chủ'
            /> 
                    {/* màn hình 2 */}
            <Stack.Screen name="Details" 
                component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;

//kh học thuộc mà hãy hiểu cách nó hoạt động
//điều hướng trang