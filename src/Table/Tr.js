import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'

const styles={
  tableRowBody: {
    backgroundColor: '#fff',
    borderRadius: '0px 2px 2px 2px',
  },
}

const Tr = ({
  classes,
  height,
  children,
  className,
  ...rest
}) => (
  <tr
    height={height}
    className={classNames(className, classes.tableRowBody)}
    {...rest}
  >
    {children}
  </tr>
)

export default injectSheet(styles)(Tr)