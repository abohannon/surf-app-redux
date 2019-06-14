/* global document */
import { polyfill } from 'es6-promise'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './containers/App'

// To add es6 promise polyfill the global environment
polyfill()
store.getState()
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById(`root`),
)
