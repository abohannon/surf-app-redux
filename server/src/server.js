import { GraphQLServer } from 'graphql-yoga'
import { resolvers } from './resolvers/index'
import prisma from './prisma.js'

const server = new GraphQLServer({
  typeDefs: `./src/schema.graphql`,
  resolvers,
  contect(request) {
    return {
      prisma,
      request,
    }
  },
})

export default server