import React from 'react'
import PropTypes from 'prop-types'
import Item from 'react-through/lib/Item'
import createAdvAgent from 'react-through/lib/createAdvAgent'
import throughArea from 'react-through/lib/throughArea'
import { compose, withState } from 'recompose'
import { withRouter } from 'react-router'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import SvgIcon from '../SvgIcon'
import { ProjectLink } from '../Project'
import UserNav from './UserNav'
import styles from './TopPanel.styles'
  
const SearchAgent = createAdvAgent('Search')

const TopPanel = ({
  classes,
  history,
  children,
  switchShowSettings,
  search,
  setSearch,
  project,
  inputLength,
  inputLengthUpdate,
}) => {
  return (
    <div className={classNames(classes.container)}>
      <SearchAgent search={search}/>
      <button
        type="button"
        className={classes.upgrade}
        style={{display: 'none'}}
      >
        <SvgIcon name='slider' />
        <span style={{paddingLeft: 12, fontWeight: 'normal'}}>
          Upgrade plan
        </span>
      </button>
      <div
        className={classes.searchContainer}
        style={{flexBasis: inputLength}}
        onFocus= {() => {console.log('focus'); inputLengthUpdate('100%')}}
        onBlur= {() => {console.log('blur'); inputLengthUpdate('300px')}}
      >
      </div>
      <div className={classes.itemWrapper} style={{width: 80}}>
        <div type="button" className={classes.item}>
          <ProjectLink to='/users'>
            <SvgIcon name='people1' fill='#fff'/>
          </ProjectLink>
        </div>
      </div>
      <div className={classes.itemWrapper}>
        <div className={classes.item} style={{cursor: 'default'}}>
          <SvgIcon name='alarm' fill='#fff'/>
        </div>
        <div className={classes.label}>
          2
        </div>
      </div>
      <UserNav>
        <Item to='/' icon='user'>Profile</Item>
        <Item onClick={switchShowSettings} icon='cog'>Settings</Item>
        <Item to='/logout' icon='sign-out'>Sign out</Item>
      </UserNav>
    </div>
  )
}

const enhance = compose(
  withRouter,
  withState('search', 'setSearch', ''),
  withState('inputLength', 'inputLengthUpdate', '300px'),
  injectSheet(styles),
  throughArea('Project'),
)

export default enhance(TopPanel)