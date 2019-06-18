import { ApolloClient } from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import isBrowser from './utils/isBrowser'

const httpLink = createHttpLink({
  uri: `http://localhost:4000`,
})

// Automatically include auth token with http requests if user is authenticated
const authLink = setContext((_, { headers }) => {
  const token = isBrowser() && localStorage.getItem(`token`)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ``,
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default client
