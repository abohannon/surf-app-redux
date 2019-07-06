import { gql } from 'apollo-boost'

export const LoginMutation = gql`
  mutation loginMutation($email: String!, $password: String!) {
    login(
      data: {
        email: $email
        password: $password
      }
    ) {
      token
      user {
        id
        name
        email
      }
    }
  }
`
