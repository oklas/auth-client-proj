import React from 'react'
import { compose, withProps } from 'recompose'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import withPersonnel from './withPersonnel'
import UserChip from './UserChip'

const styles = {
  chipUserList: {
    display: 'inline-block',
  }
}

const UserChipListTypes = {
  list: PropTypes.array.isRequired,
  invites: PropTypes.array.isRequired,
}

const UserChipList = ({
  classes,
  personnel,
  full,
  list,
  invites,
  className,
  onClick,
  ...rest
}) => (
  <React.Fragment>
    {!personnel ? null : [
      ...list.map(userId => personnel.userById(userId)).map( user => (
        <span
          key={user._id}
          style={full ? {display: 'block'}:{}}
          className={classes.chipUserList}
          onClick={onClick}
          {...rest}
        >
          <UserChip {...{
            user,
            full,
            onClick,
          }}/>
        </span>
      )),
      ...invites.map( invite => (
        <span
          key={invite}
          style={full ? {display: 'block'}:{}}
          className={classes.chipUserList}
          onClick={onClick}
        >
          <UserChip {...{
            invite,
            full,
            onClick,
          }}/>
        </span>
      )),
    ]}
  </React.Fragment>
)

UserChipList.propTypes = UserChipListTypes

const enhance = compose(
  withPersonnel,
  withProps(({personnel, staticPersonnel}) => ({
    personnel: personnel ? personnel : staticPersonnel
  })),
  injectSheet(styles),
)

export default enhance(UserChipList)