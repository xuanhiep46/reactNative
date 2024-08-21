import { View, Text, Button } from "react-native"


const HomeScreen = () => {
    return (
        <View>
            <Text>Xun Home Screen</Text>
            <Button title="View Detail"
                onPress={() => alert("me")}
            />
        </View>
    )
}

export default HomeScreen;