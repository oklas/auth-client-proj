import gql from 'graphql-tag'

export default gql`
  mutation InviteUpdateById( $record: UpdateByIdInviteInput! ) {
    inviteUpdateById (
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