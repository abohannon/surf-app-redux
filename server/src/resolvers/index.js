import { extractFragmentReplacements } from 'prisma-binding'
import User from './User'
import Query from './Query'
import Mutation from './Mutation'

const resolvers = {
  Query,
  Mutation,
  User,
}

const fragmentReplacements = extractFragmentReplacements(resolvers)

export { resolvers, fragmentReplacements }