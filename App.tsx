import { useState } from 'react';
import { FlatList, Button, TextInput, StyleSheet, Text, View, ScrollView } from 'react-native';
//import { FlatList } from 'react-native-gesture-handler';

interface ITodo {
  id: number;
  name: string;
  //định nghĩa kiểu đối tượng cho nó
}
export default function App() {
  const [todo, setTodo] = useState("");

  const [listTodo, setListTodo] = useState<ITodo[]>([]) // '[]' nghĩa là mảng rỗng

  //{id: 1, name: "watching xun"}

  function randomInteger(min: number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } //hàm tạo id số random cho id

  const handleAddTodo = () => {
    if(!todo) return;
    setListTodo([...listTodo, 
      { id: randomInteger(2, 2000000), name: todo}
    ]);
      setTodo("") // để rỗng thì mỗi khi m nhập xong thì phần chữ trong input nó sẽ tự động biến mất
  }//tạo function như vầy chỉ cần gọi lại là nó tự chạy được

  //jsx
  return (
  <View style={styles.container}> 
    {/* Header */}
    <Text style={styles.header} >To-do App</Text>

    {/* Form */}
    <View style={styles.body}>
      <TextInput 
      value={todo} //kiểm soát giá trị cho nó
      style = {styles.todoInput}
      onChangeText={(value) => setTodo(value)} //in luôn giá trị mà bạn nhập vào
      />
      <Button 
        title='Add todo'
        onPress={handleAddTodo} //onPress: nhấn và nó sẽ ...
      />
    </View>

    {/* List to-do */}
    <View style={styles.body}>
      <FlatList
        data={listTodo}
        keyExtractor={item => item.id+ ""} //để ở đây để nó biết cần phải render như thế nào
        renderItem={({item}) => {
          return (
            <Text style={styles.todoItem}>{item.name}</Text>
          )
        }}
      />
      {/* <Text>{JSON.stringify(listTodo)}</Text> : in ra phần listTodo*/}
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
    //marginHorizontal:30
  },

  body: {
    paddingHorizontal:10,
    marginBottom:20,
  }
});

//đã coi tới 3:25:11

