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

// export const LoginMutation = props => (
//   <Mutation
//     mutation={LOGIN_USER}
//     onCompleted={data => localStorage.setItem(`token`, data.login.token)}
//   >
//     { login => props.children(login) }
//   </Mutation>
// )
