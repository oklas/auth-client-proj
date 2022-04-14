import gql from 'graphql-tag'

export default gql`
  mutation InviteCreate( $record: CreateOneInviteInput! ) {
    inviteCreate (
      record: $record,
    ) {
      record {
        _id
        project_id
        name
        invited
      }
    }
  }
`