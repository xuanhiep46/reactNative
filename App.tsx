import { useState } from 'react';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("xuanhiep");
  const [age, setAge] = useState<number>(0);

  //jsx
  return (
    <View style={styles.container}> 
    <View>
      <Text style={{fontSize:40, fontWeight: "600"}}>Name: {name} </Text>
      <TextInput 
      multiline //Tự động mở rộng mỗi khi ô xuống dòng
      autoCapitalize={'words'} //tự động viết hoa (kh quan trọng)
      onChangeText={(value) => setName(value)} //Cập nhật phần Name cho thằng name phía trên
      style={{ 
        borderColor: "green",
        borderWidth: 1, 
        width: 200,
        padding: 15
      }} 
      />
    </View>

    <View>
      <Text style={{fontSize:40, fontWeight: "600"}}>Age: {age} </Text>
      <TextInput 
      onChangeText={(value) => setAge(+value)} //Khi thêm dấu + vào phần setAge thì nó sẽ Convert kiểu string sang number
      style={{ 
        borderColor: "green",
        borderWidth: 1, 
        width: 200,
        padding: 15
      }} 
      keyboardType='numeric' //kiểu bàn phím
      maxLength={2}//giới hạn 2 chữ số
      />
    </View>
      
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