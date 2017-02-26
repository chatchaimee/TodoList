import React, { Component } from 'react'
import { Container , Segment, Header, Input, Button, Checkbox } from 'semantic-ui-react'

class TodoList extends Component {
  state = {
    style: { margin: '5px 0px 0px 0px' },
    value: '',
    todoList: []
  }

  handleInputChange = (e) => {
    this.setState({
        value: e.target.value
    })
  }

  handleSubmit = () => {
    const { value, todoList } = this.state

    if (value !== '' && value !== null) {
      this.setState({
        todoList: todoList.concat([value]),
        value: ''
      })
    } else {
      alert('Please input todo')
    }
  }

  handleDelete = (index) => {
    const { todoList } = this.state

    todoList.splice(index, 1)

    this.setState({
        todoList: todoList
    })
  }

  handleCheck = (e, data) => {
    const { checked } = data

    if (!checked) {
      this.setState({
        style: { margin: '5px 0px 0px 0px', textDecoration: 'line-through' }
      })
    } else {
      this.setState({
        style: { margin: '5px 0px 0px 0px', textDecoration: 'none' }
      })
    }
  }

  render() {
    const { value, todoList, style } = this.state

    return (
      <Container text>
        <Segment raised>
          <Header as='h1' textAlign='center'>
            Todo List
          </Header>
          <Input fluid action type='text' placeholder='Todo...' >
            <input onChange={this.handleInputChange} value={value} />
            <Button icon='plus' color='green' onClick={this.handleSubmit} />
          </Input>
          <Segment.Group raised>
            {
              todoList.map((value, index) => (
                <Segment key={index + value}>
                  <Button icon='close' color='red' floated='right' size='mini' onClick={() => this.handleDelete(index)} />
                  <Button icon='content' color='blue' floated='right' size='mini' />
                  <Checkbox style={style} label={value} onClick={this.handleCheck} />
                </Segment>
              ))
            }
          </Segment.Group>
        </Segment>
      </Container>
    )
  }
}

export default TodoList
