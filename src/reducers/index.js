import { combineReducers } from 'redux'
import editUsers from './users'

const rootReducer = combineReducers({
  data: editUsers
})

export default rootReducer