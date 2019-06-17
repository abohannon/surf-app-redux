import React from 'react'
import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'

const LOGIN_USER = gql`
  mutation loginMutation($email: String!, $password: String!) {
    login(
      data: {
        email: $email
        password: $password
      }
    ) {
      token
    }
  }
`

export const LoginMutation = props => (
  <Mutation
    mutation={LOGIN_USER}
    onCompleted={data => localStorage.setItem(`token`, data.login.token)}
  >
    { login => props.children(login) }
  </Mutation>
)
