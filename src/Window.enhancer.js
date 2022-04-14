import { compose, withReducer, withHandlers, withState, lifecycle } from 'recompose'

export default compose(
  withReducer('minimize', 'switchMinimize', state=>!state, false),
)