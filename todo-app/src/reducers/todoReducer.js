export const initialState = []

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                {
                    todo: action.payload,
                    completed: false,
                    id: Date.now()
                }
            ]
        case 'TOGGLE_COMPLETED':
            return state.map(todo =>
                todo.id === action.payload ?
                    {
                        ...todo,
                        completed: !todo.completed,
                    }
                    : todo)
        case 'CLEAR_COMPLETED':
            return state.filter(todo => todo.completed === false)
        default:
            return state
    }
}