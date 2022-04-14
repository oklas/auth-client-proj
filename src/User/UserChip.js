import React from 'react'
import { compose } from 'recompose'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import withPersonnel from './withPersonnel'

const styles = {
  chip: {
    height: 32,
    width: 32,
    marginRight: '-12px',
    borderRadius: '50%',
    font: '14px Roboto',
    color: '#fff',
    lineHeight: '32px',
    textAlign: 'center',
  },
  chipUser: {
    extend: 'chip',
  },
  chipInvite: {
    extend: 'chip',
    background: '#4F4F4F',
  },
}

const UserChipTypes = {
  user: PropTypes.object,
  invite: PropTypes.string,
  user_id: PropTypes.string,
  full: PropTypes.bool,
}

const baseColorSet = [
  '2952A3', '8D6F47', '4E5D6C', '865A5A', '5A6986', '5A6986', '5229A3',
  '528800', '88880E', '6E6E41', 'BE6D00', 'B1365F', '705770', '7A367A',
  'A32929', 'B1440E', '29527A', '4A716C', '28754E', '1B887A', 'AB8B00',
]

const UserChip = ({
  classes,
  personnel,
  full,
  user,
  invite,
  user_id,
  ...rest
}) => {
  if( user_id && !personnel ) return null
  if( user_id && !user )
    user = personnel.userById(user_id)
  if(user) return (
    full ?
      <React.Fragment>
        {user.firstName} {user.lastName} (@{user.name})
      </React.Fragment>
    :
      <div
        key={user._id}
        className={classes.chipUser}
        title={`@${user.name} (${user.firstName} ${user.lastName})`}
        style={{backgroundColor: `#${baseColorSet[Math.floor(Math.random() * baseColorSet.length)]}`}}
      >
        {(user.firstName||'?').charAt(0)}
        {(user.lastName||'?').charAt(0)}
      </div>
  )
  if(invite) return (
    full ?
      <React.Fragment>
        {invite} (invitation)
      </React.Fragment>
    :
      <div
        key={invite}
        className={classes.chipInvite}
        title={invite}
      >
        {(invite.split(/[-_\.@~!#$%^&* \t]/)[0]||'?').charAt(0)}
        {(invite.split(/[-_\.@~!#$%^&* \t]/)[1]||'?').charAt(0)}
      </div>
  )
  return 'UserChip: Error: There is no user or invite provided'
}

UserChip.propTypes = UserChipTypes

export default compose(
  withPersonnel,
  injectSheet(styles),
)(UserChip)
