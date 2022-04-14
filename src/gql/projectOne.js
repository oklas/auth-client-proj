import gql from 'graphql-tag'

export default gql`
  query ProjectOne( $filter: FilterFindOneProjectInput! ) {
    projectOne (
      filter: $filter,
    ) {
      _id
      name
      title
      description
      users
      events {
        _id
        name
        title
        prefix
        color
        enabled
      }
    }
  }
`