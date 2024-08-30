// import { StyleSheet, Text, View } from "react-native";

// const styles = StyleSheet.create({
//     container: {
//         marginTop: 40,
//         flex: 1,
//         borderWidth: 1,
//         borderColor: "red",
//         //justify => ox (row) // oy (column)
//         // justifyContent: "center",

//     },
//     item1: {
//         backgroundColor: "violet",
//         padding: 30,


//     },
//     item2: {
//         backgroundColor: "orange",
//         padding: 30,


//     },
//     item3: {
//         backgroundColor: "cyan",
//         padding: 30,

//     },
//     item4: {
//         backgroundColor: "green",
//         padding: 30,


//     },
// })

// const FlexBox = () => {
//     return (
//         <View style={styles.container}>
//             <View style={styles.item1}>
//                 <Text> item 1</Text>
//             </View>

//             <View style={styles.item2}>
//                 <Text> item 2</Text>
//             </View>

//             <View style={styles.item3}>
//                 <Text> item 3</Text>
//             </View>

//             <View style={styles.item4}>
//                 <Text> item 4</Text>
//             </View>

//         </View>
//     )
// }

// export default FlexBox;



//____________________Làm lại từ đầu___________________________________

import { StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({
    container : {
        //mặc định của react là flex, khác với web mặc định là block
        marginTop: 40,
        flexDirection: "column", //xếp hàng cho item ngang hay hàng dọc cho nó
        //justifyContent: "center", //căn theo trục x
        //alignItems: "center",//căn theo trục y
        //flex : kế thừa không gian của thằng cha (ở đây thì sẽ là màn hình đt, cứ lấy số con flex chia đều ra theo tỉ lệ flex)

    },
    item1: {
        backgroundColor: "violet", //nếu không set thì nó sẽ ăn theo kích thước của thằng con (ở đây sẽ là thẻ text)
        padding: 30,
        //flex: 1
    },
    item2: {
        backgroundColor: "orange",
        padding: 30,
        //flex: 2,
    },
    item3: {
        backgroundColor: "cyan",
        padding: 30,
    },
    item4: {
        backgroundColor: "green",
        padding: 30,
    },
})

const FlexBox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.item1}>
                <Text>item 1</Text>
            </View>

            <View style={styles.item2}>
                <Text>item 2</Text>
            </View>

            <View style={styles.item3}>
                <Text>item 3</Text>
            </View>

            <View style={styles.item4}>
                <Text>item 4</Text>
            </View>

        </View>
    )
}

export default FlexBox;


//Tìm hiểu những thuộc tính flexbox của CSS: justify-content, flex
//Thực hành lại và đọc song song tài liệu để tăng khả năng hiểu nó hơn nhé