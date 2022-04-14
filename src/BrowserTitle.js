import React from 'react'

const BrowserTitle = ({
  children,
}) => {
  document.title = Array.isArray(children) ? children.join('') : children
  return null
}

export default BrowserTitle