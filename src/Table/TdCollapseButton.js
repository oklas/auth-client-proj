import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import CollapseButton from '../CollapseButton'

const styles = theme => ({
  blueLine: {
    position: 'relative',
    '&:before': {
      top: 0,
      left: 0,
      width: 2,
      height: 'calc(100% + 10px)',
      content: "''",
      display: 'block',
      position: 'absolute',
      background: '#016BFC',
      zIndex: 10,
    }
  },
})

const TdCollapseButton = ({
  classes,
  id,
  showSubgrid,
  showSubgridSwitch,
  className,
}) => (
  <td className={classNames(showSubgrid && showSubgrid[id] ? classes.blueLine : undefined,
                 className)}
  >
    {!id ? null :
      <CollapseButton
        open={showSubgrid[id]}
        onClick={e=>showSubgridSwitch(id)}
      />
    }
  </td>
)

export default injectSheet(styles)(TdCollapseButton)