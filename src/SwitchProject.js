import React from 'react'
import {compose} from 'recompose'
import moment from 'moment'
import {withRouter} from 'react-router-dom'
import { Query } from 'react-apollo'
import classNames from 'classnames'
import injectSheet from 'react-jss'
import Dropdown, {
  DropdownTrigger,
  DropdownContent,
} from 'react-simple-dropdown'
import Arrow from './Arrow'
import SvgIcon from './SvgIcon'
import {projectRoute} from './consts'
import projectMany from './gql/projectMany'
import styles from './SwitchProject.styles'

class SwitchProject extends React.Component {
  render() {
    const {
      classes,
      history,
      active,
      switchActive,
      projects,
    } = this.props 

    return (
      <Dropdown
        className={classes.accountDropdown}
        style={{verticalAlign: 'top', marginLeft: 30}}
        ref="dropdown"
        active={active}
        onClick={()=>{
          switchActive()
          this.refs.dropdown.hide()
        }}
      >
        <DropdownTrigger style={{display: 'flex', alignItems: 'center'}}>
          <div
            type="button"
            className={classes.switchBtn}
            onClick={switchActive}
          >
            <SvgIcon name='profile' fill='#fff' className={classes.projectIcon}/>
            <span style={{paddingLeft: 30}}>Flote</span>
            <Arrow active={active} className={classes.arrow} />
          </div>
        </DropdownTrigger>
        <DropdownContent style={{position: 'relative'}}>
          <ul className={classes.dropdownContent}>
            <li
              className={classes.menuItem}
              onClick={()=>history.push(`/${projectRoute}/`)}
            >
              Home
            </li>
            {projects.map(({name, title}) => (
              <li
                key={name}
                className={classes.menuItem}
                onClick={()=>history.push(
                    `/${projectRoute}/${name}/daily/${moment().format('YYYY-MM-DD')}`
                  )}
              >
                {title}
              </li>
            ))}
          </ul>
        </DropdownContent>
      </Dropdown>
    )
  }
}

const enhance = compose(
  injectSheet(styles),
  withRouter,
  Component => props => (
    <Query query={projectMany} variables={{}}>
      {({ loading, error, refetch, data }) => {
        if(loading) return null
        if(error) return <b>{error.message}</b>
        const projects = data.projectMany
        return <Component {...props} projects={projects}/>
      }}
    </Query>
  ),
)

export default enhance(SwitchProject)