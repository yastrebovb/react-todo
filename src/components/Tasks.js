import React, { Component } from 'react'
import FlipMove from 'react-flip-move';
import sort from '../actions/sort'

export default class Tasks extends Component {
  handleRemoveTask = event => {
    this.props.removeTask(event.target.dataset.id)
  }

  handleToggleTask = event => {
    this.props.toggleTask(event.target.dataset.id)
  }

  render() {
    let { data, sortingMethod } = this.props
    data = sort(data, sortingMethod)

    const tasks = (
      <FlipMove>
        {data.map(task =>
            <li
              className={task.isActive ? 'task task--active' : 'task task--completed'}
              id={task.id}
              key={task.id}
              ref={(node) => this.task = node}
            >
              {task.value}
              <div className="task__actions">
                <span className="task-toggle" data-id={task.id} onClick={this.handleToggleTask}></span>
                <span className="task-remove" data-id={task.id} onClick={this.handleRemoveTask}></span>
              </div>
            </li>
        )}
      </FlipMove>)

    return (
      <ul className="tasks">
        {tasks}
      </ul>
    )
  }
}
