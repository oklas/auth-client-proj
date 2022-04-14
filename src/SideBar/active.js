import { compose, withHandlers, withState } from 'recompose'

export default compose(
  withState('active', 'setActive', false),
  withHandlers({
    switchActive: (props) => date => {
      const {active, setActive} = props
      setActive(!active)
    },
  }),
)
