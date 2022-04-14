import React from 'react'
import {Query} from 'react-apollo'
import withUserRegItemsCountGql from './withUserRegItemsCountGql'

const withUserRegItemsCount = Component => withUserRegItemsCountGql(({
  userRegItemsCountGql,
  ...props
}) => {
  if(!userRegItemsCountGql) return null
  
  return (
    <Query
      query={userRegItemsCountGql.query}
      variables={userRegItemsCountGql.variables}
    >
      {({ loading, error, refetch, data }) => {
        if(error) return <b>{error.message}</b>
        return (
          <Component {...{
            userRegItemsCount: data,
            userRegItemsCountGql,
            ...props,
          }}/>
        )
      }}
    </Query>
  )
})

export default withUserRegItemsCount