import React from 'react'
import ReactDOM from 'react-dom'

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    this.el = document.createElement('div')
    document.body.appendChild(this.el)
  }

  componentWillUnmount() {
    this.el.remove()
  }

  render() {
    if(!this.el) return null
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    )
  }
}

export default Modal