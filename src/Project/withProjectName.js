import React from 'react'
import {Route} from 'react-router'

export const withProject = Component => props => (
  <Route
    path={`/project/:project_name`}
    children={({ match }) => {
      const projectName = !match ? '' : match.params.project_name
      return <Component {...props} projectName={projectName}/>
    }}
  />
)

export default withProject