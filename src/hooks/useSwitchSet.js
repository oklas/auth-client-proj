import React from 'react'

const useSwitchSet = () => {
  const [state, stateUpdate] = React.useState({})
  return [
    state,
    id => stateUpdate({...state, [id]: !state[id]}),
  ]
}

export default useSwitchSet