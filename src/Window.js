import React, { Component } from 'react'
import {
  Button,
  Modal,
  Form
} from 'semantic-ui-react'

class Window extends Component {
  state = {
    openWindow: false,
    addValue: {},
    detailData: []
  }

  showWindow = (dimmer) => {
    this.setState({ dimmer, openWindow: true })
  }

  closeWindow = () => {
    this.setState({ openWindow: false })
  }

  inputWindowChange = (e, data) => {
    const { name, value } = data
    const { addValue } = this.state

    if (name === 'title') {
      addValue[name] = value
    } else {
      addValue[name] = value
    }

    this.setState({
      detailData: addValue
    })
  }

  detailSubmit = (e, data) => {
    const { id } = data
    const localStorageData = this.getLocalStorage()
    const { detailData } = this.state
    const setData = typeof localStorageData.detailData !== 'undefined' ? localStorageData.detailData : []

    if (this.size(detailData) > 0) {
      setData[id] = detailData
      localStorageData['detailData'] = setData
      this.setLocalStorage(localStorageData)
    }

    this.closeWindow()
  }

  setLocalStorage = (state) => {
    localStorage.setItem('todoList', JSON.stringify(state))
  }

  getLocalStorage = () => (
    JSON.parse(localStorage.getItem('todoList'))
  )

  size = (obj) => {
    let size = 0

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) size++
    }

    return size
  }

  render() {
    const localStorageData = this.getLocalStorage()
    const { openWindow, dimmer } = this.state
    const { id } = this.props
    const detailData = typeof localStorageData.detailData !== 'undefined' ? localStorageData.detailData : []

    return (
      <div>
        <Button
          icon='content'
          color='blue'
          floated='right'
          size='mini'
          onClick={ () => this.showWindow(true)} />
        <Modal dimmer={ dimmer } open={ openWindow }>
          <Modal.Header>Task Detail</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Form>
                <Form.Group widths='equal'>
                  <Form.Input
                    name='title'
                    label='Title'
                    placeholder='Title'
                    defaultValue={ typeof detailData[id] !== 'undefined' ? detailData[id]['title'] : null }
                    onChange={ this.inputWindowChange } />
                  <Form.Input
                    name='description'
                    label='Description'
                    placeholder='Description'
                    defaultValue={ typeof detailData[id] !== 'undefined' ? detailData[id]['description'] : null }
                    onChange={ this.inputWindowChange } />
                  <Form.Input
                    name='date'
                    label='Date'
                    type='date'
                    defaultValue={ typeof detailData[id] !== 'undefined' ? detailData[id]['date'] : null }
                    onChange={ this.inputWindowChange } />
                </Form.Group>
              </Form>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button icon='close' content='Cancel' color='red' onClick={ this.closeWindow } />
            <Button
              id={ id }
              icon='save'
              content="Save"
              color='blue'
              onClick={ this.detailSubmit } />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default Window