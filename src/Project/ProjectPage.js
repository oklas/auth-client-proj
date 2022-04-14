import React from 'react'
import createAdvAgent from 'react-through/lib/createAdvAgent'
import { compose, withState, withPropsOnChange, withReducer } from 'recompose'
import { Route, withRouter } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import HttpHeader from '../HttpHeader'
import { Breadcrumb } from '../Breadcrumbs'
import { Personnel, PersonnelContext } from '../User'
import withCurrentUser from '../User/withCurrentUser'
import { projectRoute } from '../consts'
import ProjectContext from './ProjectContext'
import withProjectData from './withProjectData'

const ProjectAgent = createAdvAgent('Project', props => 'project')
const ProjectEventsAgent = createAdvAgent('Project', props => 'projectEvents')
const LogListMenuAgent = createAdvAgent('LogListMenu')
const RegisterListMenuAgent = createAdvAgent('RegisterListMenu')
const PersonnelAgent = createAdvAgent('Personnel')

const ProjectPage = ({
  match,
  history,
  project,
  currentUser,
  personnel,
  selectDate,
  setSelectDate,
  showSettings,
  switchShowSettings,
  projectEvents,
  projectEventsMap,
  projectEventsHidden,
  projectEventsHiddenSwitch,
  settings,
  setSettings,
  ...rest
}) => (
  <React.Fragment>

    <HttpHeader name='Project'>
      {project._id}
    </HttpHeader>

    <Breadcrumb to={`/project/${project.name}`}>
      {project.title}
    </Breadcrumb>

    <ProjectAgent {...project} />

    <LogListMenuAgent {...{
      project_id: project._id,
      setSelectDate,
    }}/>

    <RegisterListMenuAgent {...{
      projectEventsHidden,
      projectEventsHiddenSwitch,
    }}/>

    <PersonnelAgent personnel={personnel} />

    <Route exact path={`/${projectRoute}/:project`} render={ ({match:{params}}) =>
      `Project: ${project.name}`
    } />

    <Route exact path={`/${projectRoute}/:project/daily/:date`} render={ ({match:{params}}) =>
      `Project: ${project.name} DAILY`
    } />

    <Route exact path={`/${projectRoute}/:project/my-events`} render={ ({match:{params}}) =>
      `Project: ${project.name} EVENTS`
    } />

    <Route exact path={`/${projectRoute}/:project/tag/:tag`} render={ ({match:{params}}) =>
      `Project: ${project.name} TAGS`
    } />

  </React.Fragment>
)

const enhance = compose(
  withReducer(
    'projectEventsHidden',
    'projectEventsHiddenSwitch',
    (projectEventsHidden, name) => ({
      ...projectEventsHidden,
      [name]: !projectEventsHidden[name],
    }),
    {},
  ),
  withRouter,
  withProjectData,
  withCurrentUser,
  withPropsOnChange(
    ['projectEventsHidden', 'project'],
    ({projectEventsHidden, project}) => ({
      projectEvents: !project ? [] : project.events.filter(e=>e.enabled).map(
        e => ({
          ...e,
          value: e.name,
          label: e.title,
          enabled: projectEventsHidden[e.name] ? false : e.enabled,
        })
      ),
      projectEventsMap: !project ? [] : project.events.filter(e=>e.enabled).reduce(
        (acc, e) => ({
          ...acc, [e.name]: {
            ...e,
            value: e.name,
            label: e.title,
            enabled: projectEventsHidden[e.name] ? false : e.enabled,
          }
        }), {}
      )
    })
  ),
  withPropsOnChange(
    ['users', 'invites'],
    ({users, invites, inviteCreate}) => ({
      personnel: new Personnel({users, invites, inviteCreate})
    })
  ),
  Component => props => (
    <ProjectContext.Provider value={props.project}>
      <PersonnelContext.Provider value={props.personnel}>
        <Component {...props} />
      </PersonnelContext.Provider>
    </ProjectContext.Provider>
  ),
)

export default enhance(ProjectPage)