import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'

const styles= {
  triang :{
    position: 'absolute',
    top: '50%',
    right: 5,
    display: 'inline-block',
    height: 0,
    width: 0,
    borderStyle: 'solid',
    borderWidth: '5px 3px 2.5px',
    '&.sorting': {
      borderColor: '#ADB2BA transparent transparent',
    },
    '&.sorting_asc': {
      borderColor: '#ADB2BA transparent transparent',
    },
    '&.sorting_desc': {
      borderColor: '#242425 transparent transparent',
    }
  },
  rotate: {
    top: 0,
    transform: 'rotate(180deg)',
    '&.sorting_asc': {
      borderColor: '#242425 transparent transparent',
    },
    '&.sorting_desc': {
      borderColor: '#ADB2BA transparent transparent',
    }
  },
}

const SortingBtn = ({
  classes,
  className,
 }) => (
  <React.Fragment>
    <span className={classNames(classes.triang, className)} />
    <span className={classNames(classes.triang, classes.rotate, className)} />
  </React.Fragment>
)

export default injectSheet(styles)(SortingBtn)