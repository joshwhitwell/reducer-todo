import React from 'react';

import ToDoList from './components/TodoList'

import { createStore } from 'redux'

function reducer() {
  return {
    text: 'Hello from the store!'
  }
}

export const store = createStore(reducer)

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <h1>React To-Do Form</h1>
      <ToDoList />
    </div>
  );
}

export default App;
