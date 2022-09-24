import { createStore } from 'redux'
import { tasksReducer } from '../reducers'

export const store = createStore(
    tasksReducer,
)


