export const initialState = [
    {
    todo: 'Learn about reducers',
    completed: false,
    id: Date.now()
    },
    {
        todo: 'master reducers',
        completed: false,
        id: Date.now()+1
    }
]

export const reducer = (state, action) => {
    switch(action.type) {
        default:
            return state
    }
}