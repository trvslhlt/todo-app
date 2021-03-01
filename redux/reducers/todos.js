import {
    TODO_ADDED,
    TODOS_FETCHED,
    TODO_UPDATED,
    TODO_DELETED,
} from '../actions/todos'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = [] // list of todos

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            return action.payload.todos.slice().reverse()
        case TODOS_FETCHED:
            return action.payload
        case TODO_ADDED:
            return [action.payload, ...state]
        case TODO_UPDATED:
            const todo = action.payload
            const todoIdx = state.findIndex(x => x.id == todo.id)
            const newState = [ ...state ]
            newState[todoIdx] = todo
            return newState
        case TODO_DELETED:
            const newTodos = [ ...state ]
            const idx = newTodos.findIndex(x => x.id === action.payload)
            newTodos.splice(idx, 1)
            return newTodos
        default:
            return [ ...state ]
    }
}

export default todosReducer