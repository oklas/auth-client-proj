import React from 'react'
import {Link} from 'react-router-dom'
import injectSheet from "react-jss"
import classNames from 'classnames'
import SvgIcon from '../SvgIcon'

const styles = {
  tab: {
    display: 'flex',
    alignItems: 'center',
    width: 110,
    height: 36,
    paddingLeft: 20,
    background: 'transparent',
    cursor: 'pointer',
    fontSize: 12,
    fontWeight: 500,
  },
}

const TabItem = ({
  classes,
  to='/',
  title,
  active,
  count,
  total,
  icon,
  className,
}) => (
  <Link to={to}>
    <div className={classNames(classes.tab, className)}>
      <SvgIcon name={!icon ? 'inbox' : icon} fill={active ? '#016BFC' : ' #DDDDDD'} />
      <span
        style={{color: active ? '#016BFC' : ' #DDDDDD', marginLeft: 10}
      }>
        {title}
      </span>
    </div>
  </Link>
)

export default injectSheet(styles)(TabItem)