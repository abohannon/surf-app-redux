import { GraphQLServer } from 'graphql-yoga'
import prisma from './prisma.js'
import UserQuery from './user/query'
import UserMutation from './user/mutation'
import BuoyQuery from './buoy/query'

const Root = /* GraphQL */`
   # The dummy queries and mutations are necessary because
  # graphql-js cannot have empty root types and we only extend
  # these types later on
  # Ref: apollographql/graphql-tools#293
  type Query {
    dummy: String
  }
  type Mutation {
    dummy: String
  }
  type Subscription {
    dummy: String
  }
  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`

const typeDefs = [
  Root,
  UserQuery,
  UserMutation,
  BuoyQuery,
]

const resolvers = {
  UserQuery,
  UserMutation,
  BuoyQuery,
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context(request) {
    return {
      prisma,
      request,
    }
  },
})

export default server