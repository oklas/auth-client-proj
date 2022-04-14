import React from 'react'
import ProjectContext from './ProjectContext'

export const withProject = Component => props => (
  <ProjectContext.Consumer>
    {project => (
      <Component {...props} project={project} />
    )}
  </ProjectContext.Consumer>
)

export default withProject