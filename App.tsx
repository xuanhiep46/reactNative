//Pick your age ranges
import { useState } from 'react';
import { 
    Image, FlatList, Button, StyleSheet, Text, View, ScrollView, 
    TouchableOpacity, SafeAreaView
} from 'react-native';
import styles from './styles';

const App = () => {
    const [count, setCount] = useState<number>(0);

    //JSX
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.screen}>
                <ScrollView>
                        <View style={styles.logo}>
                            <Image 
                            style={styles.logo_image}
                            source={require('./assets/images/logo.png')}
                            />
                            <Text style={styles.logo_text}>ibody</Text>
                        </View>
                        <Text style={styles.header}>Chọn độ tuổi của bạn</Text>
                        <View style={styles.cards}>
                        <View style={styles.card}>
                            <Image
                                style={[styles.img, styles.img1]}
                                source={require("./assets/images/1ages.png")}
                            />
                        </View>

                        <View style={styles.card}>
                            <Image
                                style={styles.img}
                                source={require('./assets/images/8ages.png')}
                            />
                        </View>

                        <View style={styles.card}>
                            <Image
                                style={styles.img}
                                source={require('./assets/images/15ages.png')}
                            />
                        </View>
                    </View>
                </ScrollView>

                {/* nút hoàn tất */}
                <TouchableOpacity 
                    style={styles.bottomButton}
                    onPress={() => setCount(count + 1)}
                >
                    <Text style={styles.buttonText}>Tiếp theo</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}

export default App;
//