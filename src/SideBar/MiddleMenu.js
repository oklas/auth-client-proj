import React from 'react'
import throughDirect from "react-through/lib/throughDirect"
import { compose } from "recompose"
import injectSheet from 'react-jss'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

const styles = {
  linkContainer: {
    display: 'block'
  },
  linkContainerHide: {
    display: 'none'
  },
  item: {
    position: 'relative',
    height: 35,
    marginLeft: 62,
    lineHeight: '35px',
    fontFamily: "'Roboto', sans-serif",
    fontSize: 14,
    '&:last-of-type': {
      marginBottom: 15,
    }
  },
}

const MiddleMenu = ({
  classes,
  to,
  active,
  title,
  color,
  children,
  sidebarMini,
  style,
  ...rest
}) => (
  to ?
    <LinkContainer
      className={sidebarMini ? classes.linkContainerHide : classes.linkContainer}
      {...{to, activeClassName: 'active'}}
      style={style}
    >
      <li
        className={sidebarMini ? classes.itemHide : classes.item}
        {...rest}
      >
        <Link style={{color: color || '#fff'}} to={to}>
          {title}
        </Link>
      </li>
    </LinkContainer>
  : 
    <li className={classes.item} {...{...rest, to}}>
      <a style={{color: '#fff'}}> 
        {title}
      </a>
    </li>
)

const enhance = compose(
  throughDirect('MiddleMenu'),
  injectSheet(styles),
)


export default enhance(MiddleMenu)