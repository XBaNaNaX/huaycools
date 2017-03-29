import { combineReducers } from 'redux'
import todos from '../reducers/Todo/todos'
import visibilityFilter from '../reducers/Todo/visibilityFilter'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp