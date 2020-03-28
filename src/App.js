/** @format */

import React, { Component } from 'react'
import './App.css'
import TodoListComponent from './Components/TodoListComponent'
import CreateTodoComponent from './Components/CreateTodoComponent'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {
          text: 'Wash some clothes',
          completed: false
        },
        {
          text: 'Cook breakfast',
          completed: true
        },
        {
          text: 'Clean the house',
          completed: false
        }
      ]
    }
  }

  // add new todo to list of todos
  updateTodos = todo => {
    let updatedList = this.state.todos.concat([todo])
    this.setState({
      todos: updatedList
    })
  }

  completeTodoItem = index => {
    let newTodoArray = this.state.todos.map((todo, i) => {
      if (i === index) {
        return {
          ...todo,
          completed: true
        }
      } else {
        return todo
      }
    })
    this.setState({
      todos: newTodoArray
    })
  }

  render() {
    return (
      <div className='App'>
        <div className='left-side'>
          <TodoListComponent todos={this.state.todos} completeTodoItem={this.completeTodoItem} />
        </div>
        <div className='right-side'>
          <CreateTodoComponent updateTodoProp={this.updateTodos} />
        </div>
      </div>
    )
  }
}

export default App
