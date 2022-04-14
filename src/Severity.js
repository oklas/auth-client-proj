import React from 'react'
import SvgIcon from './SvgIcon'

const Severity = ({
  record,
}) => {
  switch(record.severity) {
    case 'high': return <SvgIcon name='severityHigh' fill='#DF8243'/>; break
    case 'crit': return <SvgIcon name='severityCrit' fill='#C52828'/>; break
    default: return null; break
  }
}

export default Severity