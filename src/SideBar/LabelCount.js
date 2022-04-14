import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  labelCount: {
    position: 'absolute',
    top: '50%',
    right: 41,
    width: 22,
    height: 20,
    background: '#fff',
    borderRadius: '2px',
    textAlign: 'center',
    lineHeight: '20px',
    fontFamily:  "'Roboto', sans-serif",
    fontSize: 12,
    color: '#016BFC',
    transform: 'translateY(-50%)',
  },
}

const LabelCount = ({
  classes,
  children,
}) => (
  <span className={classes.labelCount}>
    {children}
  </span>
)

export default injectSheet(styles)(LabelCount)