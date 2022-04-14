import gql from 'graphql-tag'

export default gql`
  query UserMany( $filter: FilterFindManyUserInput ) {
    userMany(
      filter: $filter
    ) {
      _id
      name
      firstName
      lastName
    }
  }
`