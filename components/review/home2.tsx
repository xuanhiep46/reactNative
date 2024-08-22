import { View, Text, Button } from "react-native"


const HomeScreen = (props: any) => {
    const {navigation} = props; //lấy navigation thông qua props
    
    return (
        <View>
            <Text>Xun Home Screen</Text>
            <Button title="View Detail"
                onPress={() => navigation.navigate("review-detail")} //danh từ.động từ ("cái tên để nó truyền vào")
            />
        </View>
    )
}

export default HomeScreen;