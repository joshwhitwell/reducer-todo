import React, { useState, useReducer } from 'react';

import { initialState, reducer } from '../reducers/todoReducer'


export default function ToDoList() {
    const [todoValue, settodoValue] = useState('')
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleChanges = (e) => {
        settodoValue(e.target.value)
    }

    return (
        <div className="todoList">
            {
                state.length ? 
                <ul>
                {state.map(todo => <li className={todo.completed ? 'completed' : ''} key={todo.id} onClick={() => {dispatch({ type: 'TOGGLE_COMPLETED', payload: todo.id })}}>{todo.todo}</li>)}
                </ul> 
                : <p>Nothing added yet!</p>
            }
            <input
                type='text'
                name='newTodo'
                value={todoValue}
                onChange={handleChanges}
            />
            <div className="button-container">
                <button onClick=
                    {() => {
                        dispatch({ type: 'ADD_ITEM', payload: todoValue })
                        settodoValue('')
                    }
                    }
                >ADD</button>
                <button onClick={() => { dispatch({ type: 'CLEAR_COMPLETED' }) }}>CLEAR</button>
            </div>
        </div>
    );
}