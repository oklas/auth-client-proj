import React from 'react'
import { compose } from "recompose"
import injectSheet from "react-jss"

const styles = {
  contentHeader: {
    display: 'flex',
    height: 32,
    position: 'relative',
    padding: '15px 15px 0 15px',
    '& > h1': {
      display: 'inline-block',
      position: 'relative',
      margin: [0, 75, 0, 45],
      paddingTop: 60,
      fontSize: 22,
      fontWeight: 500,
    }
  },
  emptyHeader: {
    '& > h1': {
      paddingTop: 0,
    }
  },
}

const ContentHeader = ({
  title,
  children,
  classes,
  ...rest
}) => (
  <section className={children ? classes.contentHeader : classes.emptyHeader} {...rest}>
    {children}
  </section>
)


const enhance = compose(
  injectSheet(styles)
);

export default enhance(ContentHeader)