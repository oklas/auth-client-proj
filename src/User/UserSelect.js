import React from 'react'
import classNames from 'classnames'
import { compose, withState } from 'recompose'
import PropTypes from 'prop-types'
import Select from '../Select'
import { withPersonnel, UserChipList } from '../User'

const UserSelectTypes = {
  personnel: PropTypes.object,
  value: PropTypes.array.isRequired,
  valueInvite: PropTypes.array.isRequired,
  valueEmail: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  onChangeInvite: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func,
}

const UserSelect = ({
  single,
  personnel,
  value,
  valueInvite,
  valueEmail,
  placeholder,
  hideArrow,
  className,
  onChange,
  onChangeInvite,
  onChangeEmail,
  editMode,
  editModeUpdate,
  onEnter,
}) => (
  !personnel ? null : ( !editMode ?
    <UserChipList
      list={value}
      invites={valueInvite}
      onClick={()=>editModeUpdate(true)}
    />
    :
    <Select eventLikeOption allowCreate {...{
      options: personnel.asOptions,
      value: personnel.buildValue(value, valueInvite, valueEmail),
      multi: !single,
      placeholder,
      hideArrow,
      className: classNames(className),
      onChange: valueList => {
        if(valueList && !Array.isArray(valueList)) valueList = [valueList]
        if(!valueList) valueList = []
        const {users, invites, emails} = personnel.decomposeValue(valueList)
        onChange( users.map(user => user._id) )
        onChangeInvite( invites )
        onChangeEmail && onChangeEmail( emails )
      },
      newOptionCreator: ({ label, labelKey, valueKey }) => ({
        [valueKey]: valueEmail ?
          personnel.makeNameOrEmailCorrect(label) :
          personnel.makeNameCorrect(label),
        [labelKey]: valueEmail ?
          personnel.makeNameOrEmailCorrect(label) :
          personnel.makeNameCorrect(label),
        className: 'Select-create-option-placeholder',
      }),
      promptTextCreator: label => personnel.makeNameOrEmailCorrect(label),
      onEnter,
    }}/>
  )
)

UserSelect.propTypes = UserSelectTypes

const enhance = compose(
  withState(
    'editMode', 'editModeUpdate',
    ({value,valueInvite}) => !(value.length + valueInvite.length)
  ),
  withPersonnel,
)

export default enhance(UserSelect)