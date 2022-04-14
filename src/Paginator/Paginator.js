import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import injectSheet from 'react-jss'

const styles = {
  wrapper: {
    position: 'relative',
    display: 'inline-block',
    width: 50,
    margin: '2px 0',
  },
  btn: {
    display: 'inline-block',
    position: 'relative',
  },
  arrow: {
    position: 'absolute',
    display: 'block',
    marginTop: 16,
    width: 10,
    height: 10,
    borderTop: '1.5px solid #016BFC',
    borderLeft: '1.5px solid #016BFC',
    cursor: 'pointer',
  },
  left: {
    left: 15,
    top: -24,
    transform: 'rotate(-45deg)',
  },
  right: {
    top: -24,
    right: 0,
    transform: 'rotate(135deg)',
  },
  disabled: {
    borderTop: '1.5px solid #d7dade',
    borderLeft: '1.5px solid #d7dade',
  },
}

const Paginator = ({
  page,
  total = 0,
  count = 0,
  prev,
  next,
  onClick,
  classes,
  className,
  ...props
}) => {
  count = count || 0
  const half = Math.floor(count / 2)
  const first = page > half ? page - half : 1
  const final = first + count <= total ? first - 1 + count : total
  const nums = Array(final-first+1).fill(1).map((n,i)=>i+first);

  return (
    <div
      className={classes.wrapper}
      {...props}
    >
      <div
        className={classNames(classes.arrow, classes.left, (page==1) ? classes.disabled : null)}
        onClick={()=>(page==1 || onClick(page==1 ? page : page-1))}
      />
      <div
        className={classNames(classes.arrow, classes.right, page<total ? null : classes.disabled)}
        onClick={()=>(page<total && onClick(page<total ? page+1 : page))}
      />
    </div>
  )
}

Paginator.propTypes = {
  page: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  prev: PropTypes.string,
  next: PropTypes.string,
  onClick: PropTypes.func,
  count: PropTypes.number,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
}

export default injectSheet(styles)(Paginator)
