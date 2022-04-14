import React, { Component } from 'react'
import { compose, withState } from 'recompose'
import { Query, Mutation } from 'react-apollo'
import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import HelpBlock from 'react-bootstrap/lib/HelpBlock'
import projectCreate from '../gql/projectCreate'
import {projectRoute} from '../consts'

const ProjectDialog = ({
  show,
  onCancel,
  onSave,
  container,
  name,
  setName,
  title,
  setTitle,
  description,
  setDescription,
}) => (
  <Mutation
    mutation={projectCreate}
    onCompleted={()=>onSave()}
    onError={(e)=>alert(e)}
  >
    {(projectCreate, { error, data }) => (

      <Modal
        show={show}
        onHide={onCancel}
        container={container}
        aria-labelledby="contained-modal-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">
            Project
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form>
            <FormGroup>

              <ControlLabel>Project name</ControlLabel>
              <FormControl
                type="text"
                value={name}
                placeholder="project-name"
                onChange={e => setName(e.target.value)}
              />
              <FormControl.Feedback />
              <HelpBlock>
                Will be usead as part of project url:
                <b> /{projectRoute}/{name}</b>
              </HelpBlock>

              <ControlLabel>Project title</ControlLabel>
              <FormControl
                type="text"
                value={title}
                placeholder="project-title"
                onChange={e => setTitle(e.target.value)}
              />
              <FormControl.Feedback />
              <HelpBlock>
                Human readable short project name
              </HelpBlock>
             
              <ControlLabel>Project description</ControlLabel>
              <FormControl
                componentClass="textarea"
                value={description}
                placeholder="Project description"
                onChange={e => setDescription(e.target.value)}
              />
              <FormControl.Feedback />
              <HelpBlock>Short description about the project.</HelpBlock>

            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={()=>onCancel()}
          >
            Close
          </Button>
          <Button bsStyle="primary"
            onClick={()=>projectCreate({variables: {name,title,description}})}
          >
            Save
          </Button>
        </Modal.Footer>
            
      </Modal>

    )}
  </Mutation>
)

const enhance = compose(
  withState('name', 'setName',
    ({name}) => name||''
  ),
  withState('title', 'setTitle',
    ({title}) => title||''
  ),
  withState('description', 'setDescription',
    ({description}) => description||''
  ),
)

export default enhance(ProjectDialog)
