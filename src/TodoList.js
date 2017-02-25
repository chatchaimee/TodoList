import React, { Component } from 'react'
import { Container , Segment, Header, Input, Button, Checkbox } from 'semantic-ui-react'

class TodoList extends Component {
  render() {
    return (
      <Container text>
        <Segment raised>
            <Header as='h1' textAlign='center'>
                Todo List
            </Header>
            <Input fluid action={{ icon: 'plus', color:'green' }} placeholder='Todo...' />
            <Segment.Group raised>
                <Segment>
                    <Button icon='close' floated='right' size='mini' />
                    <Button icon='content' floated='right' size='mini' />
                    <Checkbox style={{margin: '5px 0px 0px 0px'}} label='Make my profile visible' />
                </Segment>
                <Segment>
                    <Button icon='close' floated='right' size='mini' />
                    <Button icon='content' floated='right' size='mini' />
                    <Checkbox style={{margin: '5px 0px 0px 0px'}} label='Make my profile visible' />
                </Segment>
                <Segment>
                    <Button icon='close' floated='right' size='mini' />
                    <Button icon='content' floated='right' size='mini' />
                    <Checkbox style={{margin: '5px 0px 0px 0px'}} label='Make my profile visible' />
                </Segment>
                <Segment>
                    <Button icon='close' floated='right' size='mini' />
                    <Button icon='content' floated='right' size='mini' />
                    <Checkbox style={{margin: '5px 0px 0px 0px'}} label='Make my profile visible' />
                </Segment>
            </Segment.Group>
        </Segment>
      </Container>
    )
  }
}

export default TodoList
