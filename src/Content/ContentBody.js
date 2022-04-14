import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  content: {
    minHeight: 250,
    padding: [18, 30, 18, 24],
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: -35,
  },
}

const ContentBody = ({children, relative, classes}) => (
  <section className={classes.content}>
    {children}
  </section>
)

export default injectSheet(styles)(ContentBody)
