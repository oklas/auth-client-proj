import React from 'react'
import throughDirect from 'react-through/lib/throughDirect'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import LogListMenu from './LogListMenu'
import RegisterListMenu from './RegisterListMenu'
import TagListMenu from './TagListMenu'
import styles from './SideBar.styles'

const SideBar = ({ classes, sidebarMini }) => (
  <aside
    className={sidebarMini ? classes.mainSidebarHide : classes.mainSidebar}
  >
    <section className={classes.sidebar}>
      <ul
        className={sidebarMini ? classes.sidebarMenuHide : classes.sidebarMenu}
        style={{overflow: 'visible'}}
      >
        <LogListMenu/>

        <RegisterListMenu/>

        <TagListMenu/>

      </ul>
    </section>
  </aside>
)

const enhance = compose(
  throughDirect('SidebarState'),
  injectSheet(styles),
)

export default enhance(SideBar)