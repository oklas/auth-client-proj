import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'

const styles={
  th: {
    padding: '0 10px 0 10px',
    font: '500 14px Roboto',
    color: '#ADB2BA',
    boxSizing: 'border-box',
    lineHeight: 1.42857143,
    height: props => props.height,
  },
  thin: {width: 20},
  sml: {width: 82},
  mid: {width: 120},
  auto: {width: 'auto'},
  smlPct: {width: '15%'},
  midPct: {width: '20%'},
}

const Th = ({
  classes,
  className,
  onClick,
  thin,
  sml,
  mid,
  auto,
  smlPct,
  midPct,
  custom,
  style,
  children,
}) => (
  <th
    className={
      classNames(
        className,
        classes.th,
        thin ? classes.thin : null,
        sml ? classes.sml : null,
        mid ? classes.mid : null,
        auto ? classes.auto : null,
        smlPct ? classes.smlPct : null,
        midPct ? classes.midPct : null,
    )}
    style={custom ? {width: custom, ...style}: null}
    onClick={onClick}
  >
    {children}
  </th>
)

export default injectSheet(styles)(Th)