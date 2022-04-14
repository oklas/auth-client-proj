import React from 'react'
import injectSheet from "react-jss"
import classNames from 'classnames'

const styles = {
  label: {
    width: 46,
    height: 20,
    lineHeight: '20px',
    textAlign: 'center',
    background: props=>props.background,
    boxSizing: 'border-box',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 2,
    fontWeight: 400,
    fontSize: 12,
    color: props=>props.color,
  },
}

const Label = ({
  classes,
  children,
  color,
  background,
  className,
}) => (
  <label className={classNames(className, classes.label)}>
    {children}
  </label>
)

export default injectSheet(styles)(Label)