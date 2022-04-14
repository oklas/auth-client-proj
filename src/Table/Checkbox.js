import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  checkbox: {
    position: 'absolute',
    left: -9999,
    minHeight: 0,
    margin: '0 !important',
    marginRight: '10px !important',
    '& + span': {
      '-webkit-appearance': 'none',
      width: 20,
      height: 20,
      outline: 'none',
      margin: 5,
      boxSizing: 'border-box',
      display: 'inline-block',
      verticalAlign: 'middle',
      border: '0.75px solid #DADADA',
      borderRadius: 2,
      backgroundColor: '#fff',
    },
    '&:checked + span': {
      backgroundColor: '#016BFC',
    },
    '&:checked + span > i': {
      display: 'block',
      width: 5,
      height: 8,
      border: '0 solid #fff',
      borderWidth: '0 1px 1px 0',
      transform: 'rotateZ(45deg)',
      margin: '3px 7px',
      pointerEvents: 'none',
    },
  },
}

const Checkbox = ({
  classes,
  value,
  onChange,
  type,
  checked,
  ...rest
}) => (
  <label>
    <input
      className={classes.checkbox}
      value={value}
      type={type}
      checked={checked}
      onChange={onChange}
      {...rest}
    /><span><i></i></span>
  </label>
)

export default injectSheet(styles)(Checkbox)