import { createStore, applyMiddleware } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import thunk from 'redux-thunk'
import rootReducer from './reducers/root'

const makeStore = () => createStore(
    rootReducer,
    applyMiddleware(thunk),
)

export const wrapper = createWrapper(makeStore, { debug: true })