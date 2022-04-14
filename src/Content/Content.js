import React from 'react'
import throughDirect from 'react-through/lib/throughDirect'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import ContentBody from './ContentBody'

const styles = {
  contentWrapper: {
    flexGrow: 1,
    marginLeft: 306,
    marginTop: 60,
    zIndex: 2,
    backgroundColor: '#ecf0f5',
    transition: 'margin-left 0.3s ease-in-out',
  },
  contentWrapperHide: {
    flexGrow: 1,
    marginLeft: 50,
    marginTop: 60,
    backgroundColor: '#ecf0f5',
    transition: 'margin-left 0.3s ease-in-out',
  },
  wrapper: {
    display: 'flex',
  },
  block: {
    flex: '1 1 0',
    paddingTop: 70,
    position: 'relative',
  },
}

const Content = ({ header, children, classes, sidebarMini }) => (
  <main
    className={
      sidebarMini ? classes.contentWrapperHide : classes.contentWrapper
    }
  >
    { !header ? null : header }

    <ContentBody>

      <div className={classes.wrapper}>

        <div className={classes.block}>
          {children}
        </div>

      </div>

    </ContentBody>
  </main>
)

const enhance = compose(
  throughDirect('Content'),
  throughDirect('SidebarState'),
  injectSheet(styles),
)

export default enhance(Content)
