import React from 'react'
import throughArea from 'react-through/lib/throughArea'
import { Link } from 'react-router-dom'

const ProjectLink = ({
  to,
  project,
  children,
}) => (
  !(project && project.name) ? null :
  <Link to={
      `/project/${project.name}` +
      (to.charAt(0)==='/' ? '' : '/') +
      to
    }
  >
    {children}
  </Link>
)

export default throughArea('Project')(ProjectLink)