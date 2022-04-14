import React from 'react'
import classNames from 'classnames'
import injectSheet from 'react-jss'

const styles = {
  arrowRight: {
    transform: 'rotate(135deg)',
  },
  arrowBottom: {
    transform: 'rotate(-135deg)',
  },
}

const Arrow = ({
  classes,
  active,
  className,
  ...rest
}) => (
  <span
    className={classNames(
      active ? classes.arrowBottom : classes.arrowRight,
      className,
    )}
    {...rest}
  />
)

export default injectSheet(styles)(Arrow)