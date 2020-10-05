import React, { useReducer } from 'react';

import { initialState, reducer } from '../reducers/todoReducer'


export default function ToDoForm() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="todoList">
      {
        state?.map(todo => <p key={todo.id}>{todo.todo}</p>)
      }
    </div>
  );
}