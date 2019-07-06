import bcrypt from 'bcryptjs'
import getUserId from '../utils/getUserId'
import generateToken from '../utils/generateToken'
import hashPassword from '../utils/hashPassword'

const Mutation = {
  async createUser(parent, args, { prisma }, info) {
    const password = await hashPassword(args.data.password)

    const exists = await prisma.exists.User({ email: args.data.email })

    if (exists) throw new Error(`User with that email already exists`)

    const user = await prisma.mutation.createUser({ 
      data: {
        ...args.data,
        password,
      },
    })

    return {
      user,
      token: generateToken(user.id),
    }
  },
  async login(parent, args, { prisma }, info) {

    const user = await prisma.query.user({
      where: {
        email: args.data.email
      }
    })

    if (!user) throw new Error(`No user found.`)

    const isMatch = await bcrypt.compare(args.data.password, user.password)

    if (!isMatch) throw new Error(`Unable to login.`)

    return {
      token: generateToken(user.id),
      user,
    }
  },
  async deleteUser(parent, args, { prisma, request }, info) {
    const userId = getUserId(request)

    const { id } = args
    const user = await prisma.exists.User({ id })

    if (!user) {
      throw new Error('No user found')
    }

    return prisma.mutation.deleteUser({
      where: {
        id: userId,
      }
    }, info)
  },
  async updateUser(parent, args, { prisma, request }, info) {
    const userId = getUserId(request)

    if (typeof args.data.password === `string`) {
      args.data.password = await hashPassword(args.data.password)
    }

    return prisma.mutation.updateUser({
      where: {
        id: userId
      },
      data: args.data,
    }, info)
  },
}

export default Mutation