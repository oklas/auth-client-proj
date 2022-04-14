import React from 'react'
import PropTypes from 'prop-types'

const GlobalClickTypes = {
  onClick: PropTypes.func.isRequired,
}

class GlobalClick extends React.Component {
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    this.props.onClick(event)
  }
 
  render() {
    return (
      null
    )
  }
}

GlobalClick.propTypes = GlobalClickTypes

export default GlobalClick