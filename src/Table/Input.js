import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  input: {
    width: '85%',
    minHeight: 34,
    border: 'none',
    font: '14px Roboto',
    backgroundColor: 'transparent',
  },
}

const Input = ({
  classes,
  value,
  onChange,
  type,
  checked,
  ...rest
}) => (
  <input
    className={classes.input}
    value={value}
    type={type}
    checked={checked}
    onChange={onChange}
    {...rest}
  />
)

export default injectSheet(styles)(Input)