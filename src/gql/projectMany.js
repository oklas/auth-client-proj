import gql from 'graphql-tag'

export default gql`
  query ProjectMany {
    projectMany {
      name
      title
      description
    }
  }
`