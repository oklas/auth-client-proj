import React from 'react'
import { ProjectList } from '../Project'

const Dashboard = ({
  showCreateProject,
  setShowCreateProject,
  history,
  ...rest
}) => (
  <ProjectList/>
)

export default Dashboard