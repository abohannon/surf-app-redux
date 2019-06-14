import { combineReducers } from 'redux'
import buoyDataReducer from './buoyDataReducer'

export default combineReducers({
  buoyData: buoyDataReducer,
})
