import gql from 'graphql-tag'

export default gql`
  query UserByCurrentAuth {
    userByCurrentAuth {
      _id
      subject
      name
      email
      createdAt
      loginAt
      firstName
      lastName
      locale
      timezone
    }
  }
`