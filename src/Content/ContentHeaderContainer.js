import React from 'react'
import throughDirect from "react-through/lib/throughDirect"
import moment from 'moment'
import Label from '../Label'

const ContentHeaderContainer = ({
  color,
  children,
  ...rest
}) => (
  <React.Fragment>
    <h1 style={color ? {color} : {}}>
      <span style={color ? {color} : {}}>
        {children ? children : <React.Fragment>&nbsp;</React.Fragment>}
      </span>
    </h1>
 {/*}   { 0!==moment().diff(moment(children||'-1'), 'days') ? null :
      <Label
        background='#fff'
        color='#016BFC'
      >
        Today
      </Label>
    }*/}
  </React.Fragment>
)

export default throughDirect('ContentHeader')(ContentHeaderContainer)
