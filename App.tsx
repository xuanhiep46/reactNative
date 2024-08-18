import { useState } from 'react';
import { FlatList, Button, TextInput, StyleSheet, Text, View, ScrollView } from 'react-native';
//import { FlatList } from 'react-native-gesture-handler';

export default function App() {
  const [students, setStudents] = useState([
    {id: 1, name: "xun1", age: 18}, //key
    {id: 2, name: "xun2", age: 19},
    {id: 3, name: "xun3", age: 18},
    {id: 4, name: "xun4", age: 17},
    {id: 5, name: "xun5", age: 16},
    {id: 6, name: "xun6", age: 15},
    {id: 7, name: "xun7", age: 14},
    {id: 8, name: "xun8", age: 13},
    {id: 9, name: "xun9", age: 12},
    {id: 10,name: "xun0", age: 11},
  ]) 

  //jsx
  return (
    <View style={styles.container}> 
    <Text style={{fontSize: 60}} >Hello world</Text>
    
    <FlatList
    data={students}
    //numColumns={2}//số cột
    keyExtractor={item => item.id + ""} //Gắn id làm phần key cho phần flatlist
    renderItem={({item}) => {
      return (
        <View style={styles.list}>
          <Text>{item.name}</Text>
        </View>
      )
    }}

    />
    {/* <ScrollView>
      {students.map(item => {
        //dùng vòng lặp map: tạo ra vòng lặp mà không làm thay đổi giá trị của biến ban đầu
        return (
          <View key={item.id} style={styles.list}>
            <Text>{item.name}</Text>
          </View>
        )
      })}
    </ScrollView> */}
    </View>
  );
}

//css in js
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15, //horizontal là hàng ngang
    paddingTop:50,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  list: {
    padding: 20,
    backgroundColor: "pink",
    marginBottom: 20,
    //marginHorizontal:30
  }
});

//đã coi tới 3:25:11

