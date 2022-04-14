class ModifierKeys {
  install() {
    document.addEventListener('keydown', this.keydownHandler)
    document.addEventListener('keyup', this.keydownHandler)
  }

  deinstall() {
    document.removeEventListener('keydown', this.keydownHandler)
    document.removeEventListener('keyup', this.keydownHandler)
  }

  keydownHandler = (e) => {
    const {ctrlKey, shiftKey, altKey, metaKey} = e
    const keys = { ctrlKey, shiftKey, altKey, metaKey }

    const changedCount = Object
      .keys(keys)
      .forEach(key => this[key] = keys[key])
  }
}

export default ModifierKeys