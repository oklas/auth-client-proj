import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'

const styles={
  table: {
    width: '100%',
    maxWidth: '100%',
    tableLayout: 'fixed',
    boxSizing: 'border-box',
    borderCollapse: 'separate',
    borderSpacing: '0 10px',
    '& td': {
      padding: '0 10px 0 10px',
    },
    '& td:first-child': {
    //  paddingLeft: 20,
    },
    '& th': {
      height: props => props.height,
    },
  },
  shadow: {
    boxShadow: '4px 24px 74px rgba(16, 31, 50, 0.2)',
  }
}

const Table = ({
  classes,
  className,
  shadow,
  ariaDescribedby,
  children,
  ...rest
}) => (
  <table
    className={
      classNames(className, classes.table, shadow ? classes.shadow : null)
    }
    role="grid"
    aria-describedby={ariaDescribedby}
    {...rest}
  >
    {children}
  </table>
)

export default injectSheet(styles)(Table)