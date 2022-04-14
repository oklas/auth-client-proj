import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const CollapseButtonTypes = {
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

const styles = {
  toggleZone: {
    display: 'inline-block',
    width: 25,
    height: 20,
    cursor: 'pointer',
  },
  togglePopup: {
    display: 'inline-block',
    width: 5,
    height: 5,
    border: '1px solid #016BFC',
    transform: 'rotate(135deg)',
    borderBottom: 'none',
    borderRight: 'none',
  },
  togglePopupOpen: {
    display: 'inline-block',
    width: 5,
    height: 5,
    border: '1px solid #016BFC',
    transform: 'rotate(-135deg)',
    borderBottom: 'none',
    borderRight: 'none',
  },
}

const CollapseButton = ({
  classes,
  open,
  onClick,
}) => (
  <div {...{
    className: classes.toggleZone,
    onClick,
  }}>
    <div 
      className={open ? classes.togglePopupOpen : classes.togglePopup}
    />
  </div>
)

export default injectSheet(styles)(CollapseButton)