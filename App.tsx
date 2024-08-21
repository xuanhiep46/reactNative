import { useState } from 'react';
import { 
  TouchableWithoutFeedback, TouchableOpacity, FlatList, Button, TextInput, 
  StyleSheet, Text, View, ScrollView, Touchable, Pressable, 
  Alert, Keyboard} 
from 'react-native';
import {AntDesign} from '@expo/vector-icons'; //có sẵn ở expo nên kh cần cài vào

interface ITodo {
  id: number;
  name: string;
}

export default function App() {
  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState<ITodo[]>([]) 

  //hàm tạo id số random cho id
  function randomInteger(min: number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleAddTodo = () => {
    if(!todo) {
      //Alert component
      Alert.alert("Lỗi input todo", "Không được để trống",
      [ 
        // {
        //   text: 'Hủy',
        //   onPress: () => console.log('Cancel Pressed'),
        //   style: 'cancel',
        // },
        {text: 'Xác nhận', onPress: () => console.log('OK Pressed')},
      ]
      )
      return;
    }
    setListTodo([...listTodo, 
      { id: randomInteger(2, 2000000), name: todo}
    ]);
      setTodo("") 
  }

  const deleteTodo = (id: number) => {
    const newTodo = listTodo.filter(item => item.id !== id);
    setListTodo(newTodo);
  }

  //jsx
  return (
    // <TouchableWithoutFeedback onPress={() => console.log(">>> click me")}> .Thằng này là test thử thôi nhé
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> 

      {/* ứng dụng cho việc nhấn ra ngoài thì phần bàn phím nó sẽ tự đóng */}
  <View style={styles.container}> 
    {/* Header */}
    <Text style={styles.header} >To-do App</Text>

    {/* Form */}
    <View style={styles.form}>
      <TextInput 
      value={todo} 
      style = {styles.todoInput}
      onChangeText={(value) => setTodo(value)}
      />
      <Button 
        title='Add todo'
        onPress={handleAddTodo} 
      />
    </View>

    {/* List to-do */}
    <View style={styles.todo}>
      <FlatList
        data={listTodo}
        keyExtractor={item => item.id+ ""} 
        renderItem={({item}) => {
          return (
            <Pressable //thằng này là API mới nhất
              onPress={() => deleteTodo(item.id)}
              style={({pressed}) => ({opacity: pressed ? 0.5 : 1})}
            >
              <View style={styles.groupTodo}>
                <Text 
                  style={styles.todoItem}>{item.name}
                  <AntDesign name="close" size={24} color="black" />
                </Text>
              </View>
            </Pressable>
          )
        }}
      />
    </View>
  </View>
  </TouchableWithoutFeedback>
  );
}

//css in js
const styles = StyleSheet.create({
  groupTodo : {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", //căn giữa 2 phần tử
    borderWidth: 1,
    borderStyle: "dashed",
    marginBottom: 15,
    marginHorizontal: 10,
    padding:10,
  },
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize:60,
    //flex: 1,
  },

  form: {
    //flex: 2,
    marginBottom: 20,
  },

  todoInput: {
    padding: 5,
    margin:15,
    borderBottomWidth:1,
    borderBottomColor: "green",
  },

  list_to_do: {

  },

  todoItem : {
    fontSize:20,

    //marginBottom: 20,
    // padding:10,
  },

  todo : {
    flex: 1,
  },

  list: {
    padding: 20,
    backgroundColor: "pink",
    marginBottom: 20,
  },

  body: {
    paddingHorizontal:10,
    marginBottom:20,
  }
});

//đã coi tới 4:53:28  