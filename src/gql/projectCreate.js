import gql from 'graphql-tag'

export default gql`
  mutation projectCreate(
    $name: String!,
    $title: String!,
    $description: String!
  ) {
    projectCreate(
      name: $name,
      title: $title,
      description: $description
    ) {
      _id
      name
      title
      description
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