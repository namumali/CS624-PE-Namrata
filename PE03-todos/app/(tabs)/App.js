import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, Button} from 'react-native';
import Heading from './Heading';
import Input from './Input';

class App extends Component {
  constructor(){
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'ALL',
    };
    this.state.todos = [];
  }

  inputChange(inputValue){
    console.log('Input changed:', inputValue);
    this.setState({inputValue});
  } 

   // Function to handle adding a todo item
   addTodo = () => {
    const { inputValue, todos } = this.state;
    if (inputValue.trim()) {
      const updatedTodos = [...todos, inputValue];
      this.setState({
        todos: updatedTodos,
        inputValue: '', // clear input field after adding
      });
      console.log('Added todo:', inputValue);
      console.log('Current todo list:', updatedTodos); 
    }
  };

  render() {
    const {inputValue} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading/>
          <Input
            inputValue={inputValue}
            inputChange={text => this.inputChange(text)}
          />
          <Button
            title="Submit"
            onPress={this.addTodo}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 60,
  },
});

export default App;