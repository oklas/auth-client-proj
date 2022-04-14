import React from 'react'
import PropTypes from 'prop-types'
import createAdvAgent from 'react-through/lib/createAdvAgent'

const HttpHeader = createAdvAgent('HttpHeader','name')

HttpHeader.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default HttpHeader