import React, { useState, useReducer } from 'react';

import { initialState, reducer } from '../reducers/todoReducer'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons'

import { addItem } from '../actions/index'

export default function ToDoList() {

    const [todoValue, setTodoValue] = useState('')
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleChanges = (e) => {
        setTodoValue(e.target.value)
    }

    const toggleDispatch = (todo) => { 
        dispatch({ type: 'TOGGLE_COMPLETED', payload: todo.id }) 
    }

    const addDispatch = (e) => {
        e.preventDefault()
        dispatch({ type: 'ADD_ITEM', payload: todoValue })
        setTodoValue('')
    }

    const clearDispatch = (e) => { 
        e.preventDefault()
        dispatch({ type: 'CLEAR_COMPLETED' }) 
    }

    return (
        <div>

            {
                state.length ?
                    <div className='todoList'>
                        {state.map(todo =>
                            <p
                                className='todo'
                                key={todo.id}
                                onClick={() => {toggleDispatch(todo)}}>
                                <span>
                                    {todo.completed ?
                                        <FontAwesomeIcon
                                            icon={faCheckSquare}
                                            className='check'
                                        />
                                        : <FontAwesomeIcon
                                            icon={faSquare}
                                            className='square'
                                        />
                                    }
                                </span>
                                {todo.todo}
                            </p>
                        )}
                    </div>
                    : <h2>Nothing to show!</h2>
            }

            <form className="form-container">
                <input
                    type='text'
                    name='newTodo'
                    value={todoValue}
                    onChange={handleChanges}
                />
                <div className="button-container">
                    <button onClick={addDispatch}>ADD</button>
                    <button onClick={clearDispatch}>CLEAR</button>
                </div>
            </form>

        </div>
    );
}