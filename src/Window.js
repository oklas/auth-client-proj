import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import enhancer from './Window.enhancer'
import VanillaButton from './VanillaButton'

const styles = {
  show: {
    display: 'block',
    position: 'absolute',
    top: props => props.top,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '90%',
    background: 'white',
    zIndex: 20000,
  },
  modalWrap: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.4)',  
    zIndex: 10000,
  },
  hidden: {
    display: 'none',
  },
  header: {
    display: 'flex',
    height: 50,
    backgroundColor: '#fff',
    color: '#182F4F',
    boxShadow: '4px 4px 74px rgba(16, 31, 50, 0.15)',
    borderRadius: '0px 2px 2px 2px',
    padding: [0, 25, 0, 18],
    '& .close': {
      opacity: 1,
    },
    '& span': {
      color: 'white',
    }
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    margin: 0,
    marginRight: 'auto',
    color: 'white',
    lineHeight: '50px',
  },
  btnGroup: {
    display: 'flex',
    alignItems: 'center',
  },
  windowBtn: {
    width: 20,
    height: 20,
    marginLeft: 5,
    borderRadius: '50%',
    background: '#016BFC',
    color: 'white',
    fontSize: 14,
  },
  close: {
    display: 'inline-block',
    transform: 'rotate(45deg)',
  },
  h4: {
    fontSize: 14,
    fontWeight: 500
  }
}

const Window = ({
  classes,
  title,
  onClose,
  show,
  minimize,
  switchMinimize,
  children
}) => (
  <React.Fragment>
  <div className={classNames(
    (show ? classes.modalWrap : classes.hidden),
    (minimize ? classes.hidden : null)
  )}>
  </div>
  <div
    className={classNames(
      (show ? classes.show : classes.hidden)
    )}
  >
    <div
      className={classes.header}
    >
      <h4 className={classes.title}>
        {title}
      </h4>
      <div className={classes.btnGroup}>
      <VanillaButton
        type="button"
        className={classNames(classes.windowBtn)}
        onClick={switchMinimize}
      >
        <span> &mdash; </span>
      </VanillaButton>
      <VanillaButton
        type="button"
        className={classNames(classes.windowBtn)}
        onClick={onClose}
      >
        <span className={classes.close}> + </span>
      </VanillaButton>
      </div>
    </div>
    <div>
        {children}
    </div>
  </div>
  </React.Fragment>
)

export default enhancer (
  injectSheet(styles)(Window)
)