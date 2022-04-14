import React from 'react'
import Through from 'react-through/lib/Through'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import {Route} from 'react-router-dom'
import { compose } from 'recompose'
import { authOnly, OktaUserActualizator } from '../auth';
import {default as Content, ContentHeader, ContentHeaderContainer} from '../Content'
import SideBar from '../SideBar'
import Theme from '../Theme'
import BrowserTitle from '../BrowserTitle'
import {Breadcrumbs, Breadcrumb} from '../Breadcrumbs'
import SettingsDialog from '../SettingsDialog'
import withProject from '../Project/withProject'
import HeaderBar from '../HeaderBar'
import Routes from './Routes'
import {ContentTabs} from '../Content'

const styles = {
  wrapper: {
    overflow: 'visible',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}

const App = ({
  classes,
  project,
  showSettings,
  switchShowSettings,
  settings,
  setSettings,
  showTabs,
}) => (
  <Theme>
    <Breadcrumb to ='/' icon='home'>Home</Breadcrumb>
    <BrowserTitle>
      Flote
    </BrowserTitle>

    <OktaUserActualizator />

    <div className={classNames("wrapper",classes.wrapper)}>
      <HeaderBar
        switchShowSettings={switchShowSettings}
      />

      <SideBar/>

      <Content
        header={
          <ContentHeader style={showTabs?{marginBottom: 5}:{}}>
            <ContentHeaderContainer/>
          </ContentHeader>
        }
      >
        <Route path="/project/:project_id/daily" component={ContentTabs} />
        <Route path="/project/:project_id/my-events" component={ContentTabs} />
        <Route path="/project/:project_id/tag" component={ContentTabs} />
        <Route exact path="/project/:project_id" component={ContentTabs} />
        <Breadcrumbs />
        <Routes/>

      </Content>
    </div>

    <SettingsDialog
      show={showSettings}
      settings={settings}
      onClose={switchShowSettings}
      onSave={data=>{
        setSettings(data)
        switchShowSettings()
      }}
    />

  </Theme>
)

export default compose(
  injectSheet(styles),
  Component => props => (
    <Through area='ShowTabs' direct>
      {showTabs => <Component {...props} showTabs={!!showTabs}/>}
    </Through>
  ),
  authOnly,
  withProject,
)(App)