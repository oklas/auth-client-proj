import React from 'react'
import {withRouter} from 'react-router-dom'
import {Breadcrumb} from '../Breadcrumbs'
import SettingsDialog from '../SettingsDialog'
import Routes from './Routes'

const Project = ({
  showSettings,
  switchShowSettings,
  settings,
  setSettings,
}) => (
  <React.Fragment>
    <Breadcrumb to='/project'>Projects</Breadcrumb>
    <Routes/>
  </React.Fragment>
)

export default withRouter(Project)