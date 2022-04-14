import React from 'react'
import { Query, Mutation } from 'react-apollo'
import userByCurrentAuth from '../gql/userByCurrentAuth'
import userUpdateById from '../gql/userUpdateById'

const UserData = ({
  children,
}) => (
  <Query query={userByCurrentAuth} variables={{}}>
    {({ loading, error, refetch, data }) => {
      if( error ) return null
      if( loading ) return null
      const userData = data.userByCurrentAuth
      return (
        <Mutation
          mutation={userUpdateById}
          onCompleted={data=>refetch()}
        >
          {(userUpdate, { loading, error, data }) => {
            if( error ) return null
            if( loading ) return null
            return children({
              userData,
              userUpdate,
            })
          }}
        </Mutation>
      )
    }}
  </Query>
)

export default UserData