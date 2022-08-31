import { todos, todo,task } from './todos'
import { combineReducers } from 'redux'

const reducer = combineReducers({ todo, todos,task })

export default reducer
