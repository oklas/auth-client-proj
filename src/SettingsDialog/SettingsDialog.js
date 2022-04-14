import React, { Component } from 'react';
import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import HelpBlock from 'react-bootstrap/lib/HelpBlock'


class SettingsDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultOwner: 'Default Owner',
    }
  }

  componentWillReceiveProps(newProps) {
    if(this.props.settings != newProps.settings)
      this.setState(newProps.settings)
  }

  render() {
    const {
      show,
      settings,
      container,
      onClose,
      onSave,
    } = this.props
    return (
      <Modal
        show={show}
        onHide={onClose}
        container={container}
        aria-labelledby="contained-modal-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">
            Settings
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup>
              <ControlLabel>Log default owner</ControlLabel>
              <FormControl
                type="text"
                value={this.state.defaultOwner}
                placeholder="Default Owner"
                onChange={e => this.setState({ defaultOwner: e.target.value })}
              />
              <FormControl.Feedback />
              <HelpBlock>Will be usead as default owner property of log.</HelpBlock>
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={onClose}
          >
            Close
          </Button>
          <Button bsStyle="primary"
            onClick={()=>onSave(this.state)}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default SettingsDialog
