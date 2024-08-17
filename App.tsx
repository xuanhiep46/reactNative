import { useState } from 'react';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [name, setName] = useState<String>("xuanhiep");
  const [test, setTest] = useState({
    name: 'xun',
    age: 25
  });
  const [count, setCount] = useState<number>(0);

  //jsx
  return (
    <View style={styles.container}> 
      <Text style={styles.youtuber}>Xun Hiep!</Text> 
      <TextInput style={{
        borderColor: "green",
        borderWidth: 1
      }} />
      <Text>Hello world!</Text> 
      <Text style={{fontSize:40, fontWeight: "600"}} >
        count = {count}
      </Text>
      <View>
        <Button 
        color={"red"}
        title='Increase' onPress={() => setCount(count + 1)}
        />
      </View>
    </View>
  );
}

//css in js
// Không có khái niệm CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  youtuber : {
    color: "brown", fontSize: 60,
    borderColor: "green",
    borderWidth: 1,
    padding: 10
  }
});