// App.js
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Button } from 'react-native';
import Heading from './Heading';
import Input from './Input';
import TodoList from './TodoList';
import TabBar from './TabBar';

let todoIndex = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };
    this.submitTodo = this.submitTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  inputChange(inputValue) {
    console.log('Input Value: ', inputValue);
    this.setState({ inputValue });
  }

  submitTodo() {
    if (this.state.inputValue.match(/^\s*$/)) {
      return;
    }

    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complete: false,
    };
    todoIndex++;

    const todos = [...this.state.todos, todo];
    this.setState({ todos, inputValue: '' }, () => {
      console.log('State: ', this.state);
    });
  }

  deleteTodo(todoIndex) {
    const todos = this.state.todos.filter((todo) => todo.todoIndex !== todoIndex);
    this.setState({ todos });
  }

  toggleComplete(todoIndex) {
    const todos = this.state.todos.map((todo) => {
      if (todo.todoIndex === todoIndex) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    this.setState({ todos });
  }

  render() {
    const { inputValue, todos, type } = this.state;

    const filteredTodos = todos.filter((todo) => {
      if (type === 'All') return true;
      if (type === 'Active') return !todo.complete;
      if (type === 'Completed') return todo.complete;
      return true;
    });

    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={(text) => this.inputChange(text)}
          />

          
          <TodoList
            todos={filteredTodos}
            deleteTodo={this.deleteTodo}
            toggleComplete={this.toggleComplete}
          />
           <Button title="Submit" onPress={this.submitTodo} />
    
        </ScrollView>

        <View style={styles.tabBarContainer}>
        <TabBar
          type={type}
          setType={(newType) => this.setState({ type: newType })}
        />
      </View>
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
    paddingTop: 60,
    paddingHorizontal: 20,
  },
});

export default App;
