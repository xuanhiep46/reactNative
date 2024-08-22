import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { 
    FlatList, View, Text, Button, Touchable, TouchableOpacity, StyleSheet 
    } from "react-native"

interface IReview {
    id: number;
    title: string;
    start: number;
}

const styles = StyleSheet.create({
    reviewItem: {
        padding: 15,
        backgroundColor: "#ccc",
        margin: 10,
    }
})

const HomeScreen = (props: any) => {
    const navigation : NavigationProp<RootStackParamList> = useNavigation(); //khai báo navigation qua type, dễ hơn khai báo qua prop
    
    const [reviews, setReviews] = useState<IReview[]>([
        {id: 1, title: "React Native", start: 5},
        {id: 2, title: "hoidanit", start: 3},
    ]);
    return (
        <View>
            <Text style={{fontSize: 25,}}>Review list</Text>

            <View>
                <FlatList
                    data={reviews}
                    keyExtractor={(item) => item.id + ""}
                    renderItem={({ item }) =>{ //lấy từng phần tử một
                        return (
                            <TouchableOpacity
                            //cái nút
                            onPress={() => navigation.navigate("review-detail", item )} //danh từ.động từ ("cái tên để nó truyền vào")
                            >
                            <View style = {styles.reviewItem}>
                                <Text>{item.title}</Text>
                            </View>
                            </TouchableOpacity>
                        )
                    }} 
                />
            </View>

        </View>
    )
}

export default HomeScreen;

//6:32:10