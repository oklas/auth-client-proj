import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'

const styles = {
  buttonReset: {
    background: 'none',
    border: 'none',
    color: 'inherit',
    font: 'inherit',
    lineHeight: 'normal',
    overflow: 'visible',
    padding: 0,
    userSelect: 'none',
    outline: 'none',
    cursor: 'pointer',
  }
}

const VanillaButton = ({
  classes,
  className,
  children,
  ...rest
}) => (
  <button
    className={classNames(classes.buttonReset, className)}
    {...rest}
  >
    {children}
  </button>
)

export default injectSheet(styles)(VanillaButton)