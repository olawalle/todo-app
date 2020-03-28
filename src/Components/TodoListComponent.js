/** @format */

import React, { Component } from 'react'

class TodoListComponent extends Component {
  //   componentDidMount() {
  //     console.log(console.log(this.props))
  //   }

  updateTodo = index => {
    this.props.completeTodoItem(index)
  }

  render() {
    return (
      <div className='todolist'>
        <p>List of todo's</p>
        <ul>
          {this.props.todos.map((todo, index) => {
            return (
              <li onClick={() => this.updateTodo(index)}>
                {todo.text} <input type='checkbox' disabled checked={todo.completed} name='' id='' />{' '}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default TodoListComponent

// lifecycle hooks
// componentWillMount
// componentDidMount
// componentWillUpdate
// componentWillUnmount
