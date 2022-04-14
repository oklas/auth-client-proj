import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import { compose } from 'recompose'
import throughDirect from 'react-through/lib/throughDirect'
import FontAwesome from 'react-fontawesome'
import SvgIcon from './SvgIcon'
import VanillaButton from './VanillaButton'

const styles = {
  btn: {
    borderRadius: 3,
    textAlign: 'center',
    verticalAlign: 'middle',
    color: '#fff',
    background: '#016BFC',
  },
  default: {
  },
  primary: {
    backgroundColor: '#016BFC',
    font: '14px Roboto',
    color: '#fff',
  },
  danger: {
    backgroundColor: '#DF4C43',
    font: '14px Roboto',
    color: '#fff',
  },
  sm: {
    width: 48,
    height: 48,
  },
  lg: {
    width: 173,
    height: 48,
  },
  svgIcon: {
    marginRight: 15,
  },
}

const Button = ({
  classes,
  children,
  icon,
  primary,
  danger,
  large,
  small,
  svgIcon,
  className,
  ...rest
}) => {
  let color = ''
  if (primary) color = classes.primary
  if (danger) color = classes.danger
  let size = ''
  if (small) size = classes.sm
  if (large) size = classes.lg
  return (
    <VanillaButton
      className={classNames(className, classes.btn, color, size)}
      {...rest}
    >
      {!svgIcon ? null : <SvgIcon className={classes.svgIcon} name={svgIcon}/>}
      {!icon ? null : <FontAwesome name={icon}/>}
      {children}
    </VanillaButton>
  )
}

const enhance = compose(
  throughDirect('Button'),
  injectSheet(styles),
)

export default enhance(Button)