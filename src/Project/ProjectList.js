import React from 'react'
import moment from 'moment'
import { compose, withState } from 'recompose'
import { withRouter } from 'react-router'
import { Query, Mutation } from 'react-apollo'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import ProjectDialog from './ProjectDialog'
import InfoBox from '../InfoBox'
import {projectRoute} from '../consts'
import projectMany from '../gql/projectMany'

const ProjectList = ({
  history,
  showCreateProject,
  setShowCreateProject,
}) => (
  <Query query={projectMany} variables={{}}>
    {({ loading, error, refetch, data }) => {
      if( loading ) return null
      if(error) return <b>{error.message}</b>
      const projects = data.projectMany

      return (

        <Row className="show-grid">
          {(projects).map( ({name, title, description}) =>
            <Col key={name} mdOffset={4} md={4} smOffset={3} sm={6} xs={12}>
              <InfoBox {...{
                theme: 'aqua',
                icon: 'calendar',
                title,
                name,
                description,
                onClick: () => history.push(
                  `/${projectRoute}/${name}/daily/${moment().format('YYYY-MM-DD')}`
                )
              }}/>
            </Col>
          )}
          <Col mdOffset={4} md={4} smOffset={3} sm={6} xs={12}>
            <InfoBox {...{
              theme: 'yellow',
              icon: 'calendar-plus',
              title: 'Create',
              name: 'New Project',
              description: 'Click to create',
              onClick: () => setShowCreateProject(true)
            }}/>
          </Col>
          { showCreateProject && 
            <ProjectDialog {...{
              show: showCreateProject,
              onCancel: () => {
                setShowCreateProject(false)
              },
              onSave: () => {
                setShowCreateProject(false)
                refetch()
              },
            }}/>
          }
        </Row>

    )}}
  </Query>
)

const enhance = compose(
  withRouter,
  withState('showCreateProject', 'setShowCreateProject', false),
)

export default enhance(ProjectList)