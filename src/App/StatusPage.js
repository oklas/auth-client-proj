import React from 'react'
import gql from 'graphql-tag'
import {Query} from 'react-apollo'
import { Table, Th, Tr } from '../Table'
import {ContentHeaderAgent} from '../Content'


const StatusQueryGQL = gql`
  query Status {
    statusMany {
      status
      name
    }
  }
`

const StatusPage = ({
  settings
}) => (
  <Query
    query={StatusQueryGQL}
    variables={{}}
  >
    {({ loading, error, refetch, data }) => {
      if(error) return <b>{error.message}</b>
      if( loading ) return <b>Determining statuses of services...</b>
      if( !data.statusMany ) return (
        <b>Some error occurred</b>
      )
      const statuses = data.statusMany
      return (
        <React.Fragment>
          <ContentHeaderAgent>
            Statuses of services
          </ContentHeaderAgent>
          <br/>
          <Table>
            <thead>
              <tr>
              <Th custom='150px' style={{textAlign: 'left'}}> Name </Th>
              <Th custom='50px'> status </Th>
              <Th auto> error </Th>
              </tr>
            </thead>
            <tbody>
              {statuses.map(status => (
                <Tr
                  key={status.name}
                  height={47}
                >
                  <td> {status.name} </td>
                  <td> {status.status==='ok'?'ok':'error'} </td>
                  <td> {status.status==='ok'?'':status.status} </td>
                </Tr>
              ))}
            </tbody>
          </Table>
        </React.Fragment>
      )       
    }}
  </Query>
)

export default StatusPage