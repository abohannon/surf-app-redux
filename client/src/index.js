/* global document */
import { polyfill } from 'es6-promise'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import store from './store'
import client from './apollo'
import App from './containers/App'

// To add es6 promise polyfill the global environment
polyfill()
store.getState()
ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById(`root`),
)
