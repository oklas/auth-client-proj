import React from 'react'
import classNames from 'classnames'
import injectSheet from 'react-jss'
import {default as ReactSelect, Creatable} from 'react-select'
import {inputHeight} from '../Theme/options'

const styles = {
  select: {
    "& >.Select-control": {
      borderRadius: 0,
      border: 'none',
      height: inputHeight,
      background: 'transparent !important',
    },
    "& >.Select-menu-outer": {
      zIndex: 1000,
    },
    "& .Select-input": {
      borderRadius: 0,
      border: 'none',
      height: inputHeight,
      background: 'transparent !important',
    },
    '& .Select-placeholder': {
      textAlign: 'left',
      color: '#dddddd',
    },
    '& .Select-arrow': {
      width: 6,
      height: 6,
      border: '1px solid #016BFC',
      transform: 'rotate(-135deg)',
      borderBottom: 'none',
      borderRight: 'none',
    },
  },
  hideArrow: {
    '& .Select-arrow-zone': {
      display: 'none',
    }
  },
}

const Select = ({
  classes,
  name,
  className,
  eventLikeOption,
  onChange,
  allowCreate,
  placeholder,
  hideArrow,
  ...rest}) => {
  const SelectComponent = allowCreate ? Creatable : ReactSelect
  return (
    <SelectComponent
      className={classNames(classes.select, className, hideArrow && classes.hideArrow)}
      onChange={eventLikeOption ? onChange : event => onChange(
        {target: {...event, name}}
      )}
      placeholder={placeholder}
      {...rest}
    />
  )
}

export default injectSheet(styles)(Select)
