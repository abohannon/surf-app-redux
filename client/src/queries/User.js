import { gql } from 'apollo-boost'

export const AllUsersQuery = gql`
  query
  {
    users {
      id
      name
    }
  }
`

export const AuthQuery = gql`
  query
  {
    currentUser {
      id
      name
      email
    }
  }
`
