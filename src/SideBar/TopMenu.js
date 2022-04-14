import React from 'react'
import { compose } from 'recompose'
import classNames from 'classnames'
import injectSheet from 'react-jss'
import throughDirect from 'react-through/lib/throughDirect'
import active from './active'
import SvgIcon from '../SvgIcon'
import Arrow from '../Arrow'
import VanillaButton from '../VanillaButton'
import styles from './TopMenu.styles'

const TopMenu = ({
  classes,
  sidebarMini,
  title,
  icon,
  fill,
  width,
  height,
  dots,
  buttonTitle,
  buttonHandler,
  buttonPopup,
  className,
  children,
  onClick,
  active,
  switchActive,
  ...rest
}) => (
  <li
    className={classNames(sidebarMini ? classes.itemHide : classes.item, {'active': active})}
  >
    <a
      className={classes.link}
      onClick={onClick || switchActive}
    >
      <div className={classes.icon}>
        <SvgIcon
          name={icon}
          fill={fill}
          width={width ? width : null}
          height={height ? height : null}
        />
      </div>
      <span style={{paddingLeft: 37}}>{title}</span>
      {dots && <span className={classes.more}>
        <div className={classes.dot} />
        <div className={classes.dot} />
        <div className={classes.dot} />
      </span>}
      <Arrow
        active={active}
        className={classes.arrow}
      />
    </a>
    {buttonTitle && <VanillaButton
      className={classNames(classes.circleBtn, classes.button)}
      onClick={buttonHandler}
    >
      {buttonTitle}
    </VanillaButton>
    }
    {buttonPopup}
    <ul className={classNames(classes.treeMenu, active ? classes.treeMenuActive : null)}>
      {children}
    </ul>
  </li>
)

const enhance = compose(
  throughDirect('SidebarState'),
  injectSheet(styles),
  active,
)

export default enhance(TopMenu)