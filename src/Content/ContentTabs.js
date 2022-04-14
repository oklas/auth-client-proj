import React from 'react'
import {Route} from 'react-router'
import injectSheet from "react-jss"
import {withProjectName} from '../Project'
import TabItem from './TabItem.js'

const styles = {
  wrapper: {
    top: -10,
    display: 'flex',
    position: 'absolute',
    zIndex: 100,
    justifyContent: 'center',
    width: '100%',
  },
  tabs: {
    position: 'relative',
    display: 'flex',
    paddingBottom: 5,
    borderBottom: '1px solid #016BFC',
    '&:before': {
      display: 'block',
      position: 'absolute', 
      content: "''",
      bottom: -9,
      left: 0,
      width: '100%',
      height: 6,
      background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(212, 209, 209, 0.3) 20%, rgba(212, 209, 209, 0.4) 50%, rgba(212, 209, 209, 0.3) 80%, rgba(255,255,255,0) 100%)',
      borderRadius: 15,
      zIndex: 10,
    }
  },
  border: {
    borderRight: 'solid 1px #016BFC',
  }
}

const ContentTabs = ({
  classes,
  projectName,
}) => (
  <div className={classes.wrapper}>
    <div className={classes.tabs}>
      <Route
        exact
        path={`/project/:project_name/daily/:date`}
        children={({ match }) => (
          <TabItem
            to={`/project/${projectName}`}
            title='Daily log'
            active={!!match}
            count={5}
            total={15}
            icon='clipboardBig'
            className={classes.border}
          />
        )}
      />
      <TabItem
        title='Meetings'
        count={5}
        total={10}
        icon='meeting'
        className={classes.border}
      />
      <Route
        exact
        path={`/project/:project_name/my-events`}
        children={({ match }) => (
          <TabItem
            to={`/project/${projectName}/my-events`}
            title='Day plan'
            active={!!match}
            count={10}
            total={15}
            icon='plan'
          />
        )}
      />
    </div>
  </div>
)

export default injectSheet(styles)(withProjectName(ContentTabs))