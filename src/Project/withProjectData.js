import React from 'react'
import { Query, Mutation } from 'react-apollo'
import {InviteData} from '../User'
import projectOne from '../gql/projectOne'
import userMany from '../gql/userMany'

export default ProjectComponent => props => (
  <Query
    query={projectOne}
    variables={{filter: {name: props.match.params.project}}}
  >
    {({ loading, error, refetch, data }) => {
      if(error) return <b>{error.message}</b>
      if( loading ) return null
      if( !data.projectOne ) return (
        <b>Error or you can not access to this project</b>
      )
      const project = data.projectOne
      return (
        <Query
          query={userMany}
          variables={{filter: {_ids: project.users}}}
        >
          {({ loading, error, refetch, data }) => {
            if(error) return <b>{error.message}</b>
            if( loading ) return null
            const userManyLoading = loading
            const userMany = data.userMany
            return (
                    <InviteData passLoading
                      project={project}
                      children={({inviteMany, inviteLoading, inviteCreate}) => (
                        <ProjectComponent {...{
                          ...props,
                          project: {...project},
                          users: !userManyLoading || userMany instanceof Array ?
                            userMany : [],
                          invites: !inviteLoading || inviteMany instanceof Array ?
                            inviteMany : [],
                          inviteCreate,
                        }}/>
                      )}
                    />
            )
          }}
        </Query>
      )
    }}
  </Query>
)
