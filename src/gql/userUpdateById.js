import gql from 'graphql-tag'

export default gql`
  mutation UserUpdateById( $record: UpdateByIdUserInput! ) {
    userUpdateById (
      record: $record,
    ) {
      record {
        _id
        name
        firstName
        lastName
      }
    }
  }
`