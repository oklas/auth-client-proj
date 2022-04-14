import React from 'react'
import PropTypes from 'prop-types'
import { Query, Mutation } from 'react-apollo'
import inviteManyGQL from '../gql/inviteMany'
import inviteCreateGQL from '../gql/inviteCreate'

const InviteDataTypes = {
  children: PropTypes.func.isRequired,
  passLoading: PropTypes.bool.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func,
}

const InviteData = ({
  project,
  onCompleted,
  onError,
  passLoading,
  children,
  ...rest
}) => {
  if(!project) return '...'
  return (
    <Query
      query={inviteManyGQL}
      variables={{}}
    >
      {({ loading, error, refetch, data }) => {
        if( error ) return <b>{error.message}</b>
        if(!passLoading && loading) return null
        const inviteMany = (data && data.inviteMany) || []
        const inviteManyLoading = loading
        const inviteByName = inviteMany.reduce( (acc, item) => (
          {...acc, [item.name]: item}
        ), {})
        const invitesRefetch = refetch
        return (
          <Mutation
            mutation={inviteCreateGQL}
            onCompleted={() => {
              invitesRefetch() && onCompleted && onCompleted()
            }}
            onError={onError}
          >
            {(_inviteCreate, { error, loading, data }) => {
              if( error ) return <b>{error.message}</b>
              if(!passLoading && loading) return null
              const inviteCreateLoading = loading
              const inviteCreate = ({variables: {record}, ...rest}) => {
                _inviteCreate({...rest, variables: {record: {
                  project_id: project._id, ...record
                }}})
              }

              return children({
                inviteMany,
                inviteCreate,
                inviteLoading: inviteCreateLoading || inviteManyLoading,
              })
            }}
          </Mutation>
        )
      }}
    </Query>
  )
}

InviteData.propTypes = InviteDataTypes

export default InviteData