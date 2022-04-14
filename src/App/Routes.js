import React from 'react'
import {Route} from 'react-router-dom'
import Dashboard from '../Dashboard'
import {Project} from '../Project'
import StatusPage from './StatusPage'
import {projectRoute} from '../consts'

const Routes = ({
  settings
}) => (
  <React.Fragment>
    <Route exact path="/" component={Dashboard} />
    <Route path={`/${projectRoute}`} component={Project} />
    <Route path='/status' component={StatusPage}/>
  </React.Fragment>
)

export default Routes