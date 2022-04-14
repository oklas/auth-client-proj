import gql from 'graphql-tag'

export default gql`
  query InviteMany {
    inviteMany {
      name
      invited
    }
  }
`