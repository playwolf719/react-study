import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

import test from './test.js'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  test
})

export default todoApp
