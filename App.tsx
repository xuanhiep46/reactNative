import { useState } from 'react';
import { 
  TouchableOpacity, FlatList, Button, TextInput, StyleSheet, 
  Text, View, ScrollView, Touchable, Pressable} 
from 'react-native';

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
      alert("empty todo")
      return;
    }
    setListTodo([...listTodo, 
      { id: randomInteger(2, 2000000), name: todo}
    ]);
      setTodo("") 
  }

  const deleteTodo = (id: number) => {
    const newTodo = listTodo.filter(item => item.id !== id);
    //điều kiện todo là giữ lại cái id khác với id mà các bạn ném vào
    //đứa nào == id thì chúng ta sẽ vứt/lọc nó đi
    setListTodo(newTodo);
  }

  //jsx
  return (
  <View style={styles.container}> 
    {/* Header */}
    <Text style={styles.header} >To-do App</Text>

    {/* Form */}
    <View style={styles.body}>
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
    <View style={styles.body}>
      <FlatList
        data={listTodo}
        keyExtractor={item => item.id+ ""} 
        renderItem={({item}) => {
          return (
            <Pressable //thằng này là API mới nhất
            onPress={() => deleteTodo(item.id)}>
              <Text 
              style={styles.todoItem}>{item.name}
              </Text>
            </Pressable> //thằng này không có animation, phải tự thêm vào, nhưng nó sẽ cho bạn style animation

            // <TouchableOpacity //thằng này là API cũ
            //onPress={() => deleteTodo(item.id)}>
            //   <Text 
            //   style={styles.todoItem}>{item.name}
            //   </Text>
            // </TouchableOpacity> // thêm cái hiệu ứng cho những ô bạn bấm
          )
        }}
      />
    </View>

  </View>
  );
}

//css in js
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  header: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize:60,
  },

  form: {

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
    borderWidth: 1,
    borderStyle: "dashed",
    marginBottom: 20,
    padding:10,
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

//đã coi tới 

