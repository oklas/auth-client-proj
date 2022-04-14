import React from 'react'
import createAdvAgent from 'react-through/lib/createAdvAgent'
import throughArea from 'react-through/lib/throughArea'
import { compose, withReducer } from 'recompose'
import injectSheet from 'react-jss'
import { withRouter } from 'react-router'
import active from './active'
import TopPanel from './TopPanel'
import moment from 'moment'
import SwitchProject from './SwitchProject'
import SvgIcon from './SvgIcon'
import styles from './HeaderBar.styles'

const SidebarStateAgent = createAdvAgent('SidebarState')

const HeaderBar = ({
  switchShowSettings,
  classes,
  history,
  project,
  active,
  switchActive,
  sidebarMini,
  sidebarMiniSwitch,
}) => {
  return (
    <header className={classes.mainHeader}>
      <SidebarStateAgent sidebarMini={sidebarMini} />
      <nav className={classes.navBar}>
        <span className={classes.menu} onClick={sidebarMiniSwitch}>
          <SvgIcon name='lines' fill='#fff'/>
        </span>
        <div className={classes.calendarIcon}>
          <SvgIcon name='calendarBig' fill='#ADB2BA' />
        </div>
        <div
          className={classes.dateItem}
          onClick={()=>history.push(
            !(project && project.name) ? '/' :
              `/project/${project.name}/calendar/week/` +
              new Date().toISOString().replace(/T.*/,'')
          )}
        >
          {moment(new Date()).format('ddd, Do MMM YY')}
        </div>
        <SwitchProject {...{
          active,
          switchActive,
        }}/>
      </nav>
      <TopPanel
        switchShowSettings={switchShowSettings}
      />
    </header>
  )
}

const enhance = compose(
  withReducer('sidebarMini', 'sidebarMiniSwitch', state=>!state, false),
  withRouter,
  injectSheet(styles),
  throughArea('Project'),
  active,
)

export default enhance(HeaderBar)