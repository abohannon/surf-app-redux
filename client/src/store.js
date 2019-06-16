import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducers from './reducers'

const middleware = [thunk, logger]
const initialState = {}

const store = createStore(reducers, initialState, applyMiddleware(...middleware))

export default store
