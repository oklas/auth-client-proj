import React from 'react'
import Through from 'react-through/lib/Through'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'

const projectTagMany = gql`
  query ProjectTagMany($project_id: String!) {
    projectTagMany(project_id: $project_id)
  }
`

const withProjectTags = Component => props => (
  <Through area='Project' direct='project'>
    {project => (
      !project ? 
      <Component {...{
        ...props,
        projectTags: [],
        projectTagsRefetch: f=>f,
      }}/>
      :
      <Query
        query={projectTagMany}
        variables={{project_id: project._id}}
      >
        {({ loading, error, refetch, data }) => {
          if(error) return <b>{error.message}</b>
          if( loading ) return null
          if( !data.projectTagMany ) return (
            <b>Error or projectTagMany is fetch error</b>
          )
          const projectTags = data.projectTagMany
          const projectTagsRefetch = refetch
          return (
            <Component {...{
              ...props,
              projectTags,
              projectTagsRefetch,
            }}/>
          )       
        }}
      </Query>
    )}
  </Through>
)

export default withProjectTags