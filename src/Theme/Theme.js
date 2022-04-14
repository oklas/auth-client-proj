import React from 'react'
import PropTypes from 'prop-types'
import {ThemeProvider} from 'react-jss'
import themeDefault from './themeDefault'

const Theme = ({children}) => (
  <ThemeProvider theme={themeDefault}>
    <div className="sidebar-mini">
      {children}
    </div>
  </ThemeProvider>
)

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme
