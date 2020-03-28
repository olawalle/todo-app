/** @format */

import React, { Component } from 'react'

class CreateTodoComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: ''
    }
  }

  updateTodoText = event => {
    this.setState({
      newTodo: event.target.value
    })
  }

  addNewTodo = () => {
    //   function to update the list of todos in our app.js
    this.props.updateTodoProp({
      text: this.state.newTodo,
      completed: false
    })
  }

  render() {
    return (
      <div className='createtodo'>
        <p>Create new todo</p>
        <input type='text' onChange={this.updateTodoText} />
        <button onClick={this.addNewTodo}>SAVE TODO</button>
      </div>
    )
  }
}

export default CreateTodoComponent
