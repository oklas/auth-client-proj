import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {projectRoute} from '../consts'
import ProjectPage from './ProjectPage'
import ProjectList from './ProjectList'

const Routes = () => (
  <React.Fragment>
    <Route exact path={`/${projectRoute}`} component={ProjectList} />
    <Route path={`/${projectRoute}/:project`} component={ProjectPage} />
  </React.Fragment>
)

export default Routes