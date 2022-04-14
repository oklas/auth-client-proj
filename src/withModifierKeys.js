import React from 'react'

const maxCount = 1000000

const withModifierKeys = requiredKeys => (Component) => {
  class ModifierKeys extends React.Component {
    state = {
    }

    componentDidMount() {
      document.addEventListener('keydown', this.keydownHandler);
      document.addEventListener('keyup', this.keydownHandler);
    }

    componentWillUnmount() {
      document.removeEventListener('keydown', this.keydownHandler);
      document.removeEventListener('keyup', this.keydownHandler);
    }

    keydownHandler = (e) => {
      const {ctrlKey, shiftKey, altKey, metaKey} = e
      const keys = { ctrlKey, shiftKey, altKey, metaKey }
      const changedCount = Object
        .keys(keys)
        .filter(key => requiredKeys[key] === true)
        .filter(key => this.state[key] != keys[key])
        .length
      if( changedCount ) {
        this.setState(keys)
      }
    }

    render() {
      return (
        <Component {...this.state} {...this.props}/>
      )
    }
  }

  return ModifierKeys
}

export default withModifierKeys