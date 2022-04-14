import React from 'react'
import injectSheet from 'react-jss'
import { Scrollbars } from 'react-custom-scrollbars'

const styles = {
  trackHorizontal: {
    display: 'none',
  },
  trackVertical: {
    width: '4px !important',
    height: '96%',
    right: 16,
    bottom: 2,
    top: 7,
    borderRadius: 3,
    backgroundColor: '#445975 !important',
    '& div': {
      height: 33,
      backgroundColor: '#016BFC !important',
    },
  },
}

const menuHeight = 35
const menuMinCount = 6

const ScrollBar = ({
  classes,
  minCount = menuMinCount,
  children,
}) => {
  const length = React.Children.count(children)
  const height = 15 + menuHeight * (length > minCount ? minCount : length)
  return (
    <Scrollbars
      style={{ height, width: '100%' }}
      renderTrackHorizontal={props => <div {...props} className={classes.trackHorizontal}/>}
      renderTrackVertical={props => <div {...props} className={classes.trackVertical}/>}
    >
      {children}
    </Scrollbars>
  )
}

export default injectSheet(styles)(ScrollBar)