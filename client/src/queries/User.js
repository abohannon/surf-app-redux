import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

export const AllUsersQuery = () => (
  <Query
    query={gql`
      {
        users {
          id
          name
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error!</p>

      return data.users.map(({ id, name }) => (
        <p key={id}>{name}</p>
      ))
    }
  }
  </Query>
)

export const AuthQuery = ({ children }) => (
  <Query
    query={gql`
      {
        user {
          id
          name
          email
        }
      }
    `}
  >
    {queryResult => (
      children(queryResult)
    )}
  </Query>
)
