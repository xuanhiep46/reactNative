import { StyleSheet, View, Text, Button } from "react-native"
import { OPENSANS_REGULAR } from "../../utils/const2";
import { NavigationProp, RouteProp, useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const style = StyleSheet.create({
    review : {
        fontSize: 30,
        fontFamily: OPENSANS_REGULAR,
    },
    reviewText : {
        fontSize: 20,
        fontFamily: OPENSANS_REGULAR,
        padding: 15,
    }
})
const DetailScreen = () => {
    const navigation : NavigationProp<RootStackParamList> = useNavigation(); //khai báo navigation qua type, dễ hơn khai báo qua prop
    const route: RouteProp<RootStackParamList, 'review-detail'> = useRoute();
    
    return (
        <View>
            <Text style={styles.reviewText}>ID: {route.params?.id}</Text>
            <Text style={styles.reviewText}>Title: {route.params?.title}</Text>
            <Text style={styles.reviewText}>Rating: {route.params?.star}</Text>
            <Button 
                title="Go home" 
                onPress={() => navigation.navigate("home")}
            />
        </View>
    )
}

export default DetailScreen;