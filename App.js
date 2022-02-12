import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header.js'
import ListItem from './components/ListItem.js'
import AddItem from './components/AddItem.js'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Milk'},
    {id: uuidv4(), text: 'Eggs'},
    {id: uuidv4(), text: 'Bread'},
    {id: uuidv4(), text: 'Juice'}
  ]);

  const [text, setText] = useState("")
  const addText = (text) => {
    setText(text)
  }

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  const addItem = (text) => {
    if(!text) {
      Alert.alert("Error", "Please enter an item", {text: "Ok"})
    } else {
      setItems(prevItems => {
        return [...prevItems, {id: uuidv4(), text: text}]
      })
      setText("");
    }
  }

  return (
    <View style={styles.container}>
      <Header/>
      <AddItem addItem={addItem} addText={addText} text={text}/>
      <FlatList 
        data={items} 
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})

export default App;