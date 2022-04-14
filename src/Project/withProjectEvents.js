import React from 'react'
import throughArea from 'react-through/lib/throughArea'

const withProjectEvents = Component => throughArea('Project')(
  ({projectEvents, ...rest}) => (
    <Component
      projectEvents={projectEvents && projectEvents.list || []}
      projectEventsMap={projectEvents && projectEvents.map || {}}
      projectEventsSure={projectEvents && projectEvents.sure || (()=>null)}
      {...rest}
    />
  )
)

export default withProjectEvents