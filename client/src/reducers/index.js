import { combineReducers } from 'redux'
import buoyDataReducer from './buoyDataReducer'
import modalReducer from './modalReducer'

export default combineReducers({
  buoyData: buoyDataReducer,
  modal: modalReducer,
})
