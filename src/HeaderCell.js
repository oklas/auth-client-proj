import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import injectSheet from 'react-jss'
import {Th} from './Table'
import SortingBtn from './SortingBtn'


const styles = {
  root: {
    position: 'relative',
    cursor: 'pointer',
  }
}

const HeaderCell = ({
  name,
  children,
  className,
  classes,
  omitSortIcon,
  sortingField,
  setSortingField,
  ['container']: Container = Th,
}) => (
  <Container
    className={classNames(
      classes.root,
      className,
    )}
    tabIndex="0"
    rowSpan="1"
    colSpan="1"
    onClick={
      () => !omitSortIcon && setSortingField(
        `-${name}` == sortingField ? `+${name}` :
        `+${name}` == sortingField ? `-${name}` :
        `+${name}`
      )
    }
  >
    <span style={{paddingRight: 10}}> {children} </span>
    {!omitSortIcon && 
      <SortingBtn
        className={classNames({
          sorting_asc: !omitSortIcon && sortingField == `+${name}`,
          sorting_desc: !omitSortIcon && sortingField == `-${name}`,
          sorting: !omitSortIcon && name &&
            sortingField != `+${name}` &&
            sortingField != `-${name}`,
        })}
      />
    }
  </Container>
)

HeaderCell.propTypes = {
  children: PropTypes.node.isRequired,
  sorting: PropTypes.string,
};

export default injectSheet(styles)(HeaderCell)