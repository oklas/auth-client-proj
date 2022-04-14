import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import withProjectEvents from '../Project/withProjectEvents'

const styles = {
  suggestion: {
    position: 'relative',
  },
  circle: {
    top: '50%',
    left: -20,
    width: 9,
    height: 9,
    content: "''",
    display: 'block',
    position: 'absolute',
    background: 'gray',
    borderRadius: '50%',
    transform: 'translateY(-50%)',
  },
  tilda: {
    position: 'absolute',
    top: '50%',
    left: -20,
    transform: 'translateY(-50%)',
    color: '#016BFC',
  }
}

const Suggestion = ({
  classes,
  suggestion,
  selected,
  projectEventsMap,
}) => (
  <div
    className={classes.suggestion}
    style={suggestion._id === selected ? {backgroundColor: '#dddddd'} : {}}
  >
    {projectEventsMap[suggestion.event] ?
      <span
        className={classes.circle}
        style={{background: projectEventsMap[suggestion.event]&&projectEventsMap[suggestion.event].color}}
      /> :
      <span className={classes.tilda}> ~ </span>
    }
      {suggestion.num +' '+ suggestion.description}
  </div>
)

export default injectSheet(styles)(withProjectEvents(Suggestion))