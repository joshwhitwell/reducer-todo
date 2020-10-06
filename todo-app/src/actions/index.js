export const ADD_ITEM = 'ADD_ITEM'

export const addItem = newTodo => {
    console.log(newTodo)
    return {
        Type: ADD_ITEM,
        payload: newTodo
    }
}