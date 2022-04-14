import React from 'react'
import gql from 'graphql-tag'

const withUserRegItemsCountGql = Component => ({
  currentUser,
  projectEvents,
  ...props
}) => {
  if(
    projectEvents.length === 0 || !currentUser._id
  ) return null

  const query = gql`
    query UserRegItemsCount(${
      projectEvents.map(e => `$${e.name}: FilterRecordInput!`).join(",\n")
    }) {
      ${projectEvents.map(e => `${e.name}: recordCount( filter: \$${e.name} )`).join(",\n")}
    }
  `

  const variables = projectEvents.reduce((a,e) => ({
    ...a, [e.name]: {
      event: e.name,
      _operators: { owners: { in: [currentUser._id] } },
      OR: [
        {flag: 'promoted'},
        {flag: 'completed'},
      ],
    }
  }),{})

  return (
    <Component {...{
      currentUser,
      projectEvents,
      userRegItemsCountGql: {query, variables},
      ...props
    }}/>
  )
}

export default withUserRegItemsCountGql