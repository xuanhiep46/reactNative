import { View, Text, StyleSheet } from "react-native"
import { globalStyles } from "../../utils/const2";

const styles = StyleSheet.create({
    about: {
        fontSize: 30,
    }
})
const AboutScreen = () => {
    return (
        <View>
            <Text style={[styles.about, globalStyles.globalFont]}> About Screen google</Text> 
            {/* tip để gộp css và dễ tái sử dụng hơn */}
        </View>
    )
}

export default AboutScreen;