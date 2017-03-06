import React, { Component } from 'react'
import {
  Container,
  Segment,
  Header,
  Input,
  Button,
  Checkbox
} from 'semantic-ui-react'
import Window from './Window'

class TodoList extends Component {
  state = {
    value: '',
    todoList: []
  }

  inputChange = (e) => {
    this.setState({
        value: e.target.value
    })
  }

  submit = () => {
    const localStorageData = this.getLocalStorage()
    const { value } = this.state
    const { todoList, detailData } = localStorageData !== null ? localStorageData : this.state

    if (value !== '' && value !== null) {
      const newTodo = todoList.concat(
        [
          {
            value: value,
            check: false,
            textDecoration: 'none'
          }
        ])

      this.setState({
        todoList: newTodo,
        value: ''
      })

      this.setLocalStorage({
        todoList: newTodo,
        detailData: detailData
      })
    } else {
      alert('Please input todo')
    }
  }

  delete = (index) => {
    const localStorageData = this.getLocalStorage()
    const { todoList, detailData } = localStorageData !== null ? localStorageData : this.state

    todoList.splice(index, 1)

    if (typeof detailData !== 'undefined')
      detailData.splice(index, 1)

    this.setState({ todoList: todoList })

    this.setLocalStorage({
      todoList: todoList,
      detailData: detailData
    })
  }

  checkElement = (e, data) => {
    const { id, checked } = data
    const localStorageData = this.getLocalStorage()
    const { todoList, detailData } = localStorageData !== null ? localStorageData : this.state

    if (checked) {
      todoList[id].check = checked
      todoList[id].textDecoration = 'line-through'

      this.setState({
        todoList: todoList
      })

      this.setLocalStorage({
        todoList: todoList,
        detailData: detailData
      })
    } else {
      todoList[id].check = checked
      todoList[id].textDecoration = 'none'

      this.setState({
        todoList: todoList
      })

      this.setLocalStorage({
        todoList: todoList,
        detailData: detailData
      })
    }
  }

  setLocalStorage = (state) => {
    localStorage.setItem('todoList', JSON.stringify(state))
  }

  getLocalStorage = () => (
    JSON.parse(localStorage.getItem('todoList'))
  )

  deleteLocalStorage = () => {
    localStorage.clear()
    location.reload()
  }

  render() {
    const localStorageData = this.getLocalStorage()
    const { value } = this.state
    const { todoList } = localStorageData !== null ? localStorageData : this.state

    return (
      <Container text>
        <Segment raised>
          <Header as='h1' textAlign='center'>
            Todo List
          </Header>
          <Input fluid action type='text' placeholder='Todo...' >
            <input
              onChange={ this.inputChange }
              value={ value } />
            <Button
              icon='plus'
              color='green'
              onClick={ this.submit } />
            <Button
              icon='database'
              content='Clear'
              color='red'
              onClick={ this.deleteLocalStorage } />
          </Input>
          <Segment.Group raised>
            {
              todoList.map((value, index) => (
                <Segment key={ index + value.value }>
                  <Button
                    icon='close'
                    color='red'
                    floated='right'
                    size='mini'
                    onClick={ () => this.delete(index) } />
                  <Window id={index} />
                  <Checkbox
                    id={ index }
                    checked={ value.check }
                    style={{ margin: '5px 0px 0px 0px', textDecoration: value.textDecoration }}
                    label={ value.value }
                    onChange={ this.checkElement } />
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
