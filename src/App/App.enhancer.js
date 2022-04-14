import { compose, withHandlers, withState, lifecycle } from 'recompose'

export default compose(
  withState('showSettings', 'setShowSettings', false),
  withHandlers({
    switchShowSettings: (props) => date => {
      const {showSettings, setShowSettings} = props
      setShowSettings(!showSettings)
    },
  }),
)
