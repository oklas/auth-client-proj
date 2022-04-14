import React from 'react'
import throughDirect from 'react-through/lib/throughDirect'
import throughArea from 'react-through/lib/throughArea'
import {compose, withReducer, withState} from 'recompose'
import injectSheet from 'react-jss'
import {matchPath} from 'react-router'
import {withRouter} from 'react-router-dom'
import withProjectEvents from '../Project/withProjectEvents'
import {withCurrentUser, withUserRegItemsCount} from '../User'
import TopMenu from './TopMenu'
import MiddleMenu from './MiddleMenu'
import LabelCount from './LabelCount'
import ScrollBar from './ScrollBar'

const styles = {
  indicator: {
    top: '50%',
    left: -35,
    width: 9,
    height: 9,
    content: "''",
    display: 'block',
    position: 'absolute',
    background: 'gray',
    borderRadius: '50%',
    transform: 'translateY(-50%)',
  },
  iconMiddleCurrent: {
    '&:before': {
      position: 'absolute',
      content: '""',
      top: 6,
      left: -45,
      width: 1,
      height: 25,
      background: '#016BFC',
    },
  },
}
  
const RegisterListMenu = ({
  classes,
  history,
  project,
  projectEvents,
  projectEventsHidden,
  projectEventsHiddenSwitch,
  submenuProjectEvents,
  switchSubmenuProjectEvents,
  showRegisterEditor,
  setShowRegisterEditor,
  userRegItemsCount,
}) => {
  if(!project || !userRegItemsCount) return null
  const match = matchPath(history.location.pathname, {
    path: '/project/:project_id/register/:register',
    exact: true,
    strict: false,
  })
  const registerMatch = match&&match.params&&match.params.register

  return (
    <TopMenu
      title='Events'
      icon='inbox'
      dots
    >
      <ScrollBar>
        { !projectEvents ? null : projectEvents.map( event => !event.enabled ? null : (
          <MiddleMenu
            key={event.label}
            to={project ? `/project/${project.name}/register/${event.value}` : null}
            title={
              <div
                style={{position: 'relative'}}
                className={event.value===registerMatch ? classes.iconMiddleCurrent : ''}
              >
                <span
                  className={classes.indicator}
                  style={{background: event.color}}
                />
                {event.label} {event.enabled ? '' : '(disabled)'}
                {!userRegItemsCount[event.name] ? null : (
                  <LabelCount> {userRegItemsCount[event.name]} </LabelCount>
                )}
              </div>
            }
            icon='circle'
          />
        ))}
      </ScrollBar>

      <MiddleMenu
        title={'Edit'}
        color='#016BFC'
        to={project ? `/project/${project.name}/regedit` : null}
        icon={'plus'}
        style={{marginLeft: 9}}
        //onClick={()=>setShowRegisterEditor(true)}
      />

    </TopMenu>
  )
}

export default compose(
  injectSheet(styles),
  withReducer(
    'submenuProjectEvents',
    'switchSubmenuProjectEvents',
    state=>!state,
    false,
  ),
  withState('showRegisterEditor', 'setShowRegisterEditor', false),
  throughDirect('RegisterListMenu'),
  throughArea('Project'),
  withRouter,
  withProjectEvents,
  withCurrentUser,
  withUserRegItemsCount,
)(RegisterListMenu)
