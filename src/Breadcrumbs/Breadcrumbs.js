import React from 'react'
import PropTypes from 'prop-types'
import { compose } from "recompose"
import throughDirect from "react-through/lib/throughDirect"
import injectSheet from "react-jss"
import { Link } from 'react-router-dom'
import { Breadcrumbs as DynamicBreadcrumbs } from 'react-breadcrumbs-dynamic'
import SvgIcon from '../SvgIcon'

const styles = {
  breadcrumb: {
    position: "absolute",
    top: -23,
    right: 0,
    height: 28,
    marginTop: 0,
    marginBottom: 0,
    padding: "7px 10px",
    borderRadius: '2px 2px 0 0', 
    fontSize: 12,
    color: '#182F4F',
    zIndex: 100,
    "& > li": {
      display: "inline-block",
      position: 'relative',
      color: "#444",
      "& > a": {
        color: "#444",
        textDecoration: "none",
        marginRight: 5
      },
      "& + li:before": {
        content: "'/\\00a0 '",
        color: '#d7dade',
      }
    }
  },
  icon: {
    position: 'relative',
    top: -1,
    paddingRight: 6,
  }
};

const Breadcrumbs = ({
  classes
}) => (
  <DynamicBreadcrumbs
    container='ol'
    containerProps={{className: classes.breadcrumb}}
    item={ ({to, icon, children}) => (
      <li>
        <span className={classes.icon}>
          {icon ? <SvgIcon name={icon}/> : null}
        </span>
        <Link to={to}>
          {children}
        </Link>
      </li>
    )}
    finalItem={ ({to, icon, children}) => (
      <li>
        <a className='active'>
          {children}
        </a>
      </li>
    )}
  />
)

Breadcrumbs.propTypes = {
  children: PropTypes.node,
}

const enhance = compose(
  throughDirect("Breadcrumbs"),
  injectSheet(styles)
)

export default enhance(Breadcrumbs)