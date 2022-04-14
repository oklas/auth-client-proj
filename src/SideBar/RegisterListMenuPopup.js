import React from 'react'
import {compose} from 'recompose'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import FontAwesome from 'react-fontawesome'
import withProjectEvents from '../Project/withProjectEvents'
import GlobalClick from '../GlobalClick'

const styles = {
  popupMenu: {
    position: 'absolute',
    top: 35,
    right: -55,
    zIndex: 4,
    minWidth: 80,
    padding: 5,
    background: '#ffffff',
    color: '#000000',
    fontSize: 14,
    fontWeight: 'normal',
    border: 'solid 1px rgba(0,0,0,0.4)',
    '& >div': {
      cursor: 'pointer',
      textAlign: 'left',
      lineHeight: '1.4em',
    },
    '.sidebar-collapse &': {
      right: -235,
      top: 36,
    }
  },
  hidden: {
    visibility: 'hidden',
  },
}

const RegisterListMenuPopup = ({
  classes,
  projectEvents,
  projectEventsHidden,
  projectEventsHiddenSwitch,
  switchSubmenu
}) => {

  let wrapperRef = React.createRef()

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      switchSubmenu()
    }
  }

  return (
    !projectEvents ? null :
    <div className={classes.popupMenu} ref={wrapperRef}>
      <GlobalClick
        onClick={handleClickOutside}
      />
      { projectEvents
        .filter(e => (
          e.enabled ||
          projectEventsHidden &&
          projectEventsHidden[e.name] !== undefined
        ))
        .map(event => (
          <div
            key={event.value}
            onClick={()=>{
              projectEventsHiddenSwitch(event.value)
              switchSubmenu()
            }}
          >
            <FontAwesome name="chevron-down"
              className={classNames({[classes.hidden]: !event.enabled})}
            />
            {event.label}
          </div>
        ))
      }
    </div>
  )
}

const enhance = compose(
  injectSheet(styles),
  withProjectEvents,
)

export default enhance(RegisterListMenuPopup)
