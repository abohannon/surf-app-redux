import { Prisma } from 'prisma-binding'

const prisma = new Prisma({
  typeDefs: `src/generated/prisma.graphql`,
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
})

console.log('prisma secret', process.env.PRISMA_SECRET)

export default prisma