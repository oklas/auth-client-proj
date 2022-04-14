import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { Query, Mutation } from 'react-apollo'
import Dropdown, {
  DropdownTrigger,
  DropdownContent,
} from 'react-simple-dropdown'
import active from '../active'
import Arrow from '../Arrow'
import userByCurrentAuth from '../gql/userByCurrentAuth'
import styles from './UserNav.styles'

class UserNav extends Component {
  constructor (props) {
    super(props);
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleLinkClick () {
    this.refs.dropdown.hide();
  }

  render () {
    const { children, classes, active, switchActive } = this.props;
    return (
      <React.Fragment>
        <Dropdown
          className={classes.dropdown}
          ref="dropdown"
          onClick={this.props.switchActive}
        >
          <DropdownTrigger>
            <Query query={userByCurrentAuth} variables={{}}>
              {({ loading, error, refetch, data }) => (
              <React.Fragment>
                <div className={classes.avatar}>
                  {data && data.userByCurrentAuth &&
                  (data.userByCurrentAuth.firstName||"?").charAt(0)
                  + (data.userByCurrentAuth.lastName||"?").charAt(0)}
                </div>      
                <Arrow active={this.props.active} className={classes.arrow}/>
              </React.Fragment>
              )}
            </Query>
          </DropdownTrigger>
          <DropdownContent style={{position: 'static'}}>
          <ul className={classNames("dropdown-menu", classes.rightPosition)}>
            { React.Children.map(children, 
              ({props: {to, children, icon, theme, onClick} }) => (
                <li
                  className={classes.menuItem}
                  onClick={this.handleLinkClick}
                >
                  { onClick ?
                    <a onClick={onClick}>
                      <i className={`fa fa-${icon} text-${theme||'aqua'}`} />
                      {children}
                    </a>
                  :
                    <Link to={to}>
                      <i className={`fa fa-${icon} text-${theme||'aqua'}`} />
                      {children}
                    </Link>
                  }
                </li>
              )
            )}
          </ul>
          </DropdownContent>
        </Dropdown>
      </React.Fragment>
    );
  }
}

const enhance = compose(
  active,
  injectSheet(styles)
)

export default enhance(UserNav)