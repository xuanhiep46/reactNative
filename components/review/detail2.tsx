import { StyleSheet, View, Text, Button } from "react-native"
import { OPENSANS_REGULAR } from "../../utils/const2";
import { NavigationProp, useNavigation } from '@react-navigation/native';

const style = StyleSheet.create({
    review : {
        fontSize: 30,
        fontFamily: OPENSANS_REGULAR,
    }
})
const DetailScreen = () => {
    const navigation : NavigationProp<RootStackParamList> = useNavigation(); //khai báo navigation qua type, dễ hơn khai báo qua prop
    
    return (
        <View>
            <Text> Detail Screen google</Text>
            <Button 
            title="Go home" 
            onPress={() => navigation.navigate("home")}/>
        </View>
    )
}

export default DetailScreen;