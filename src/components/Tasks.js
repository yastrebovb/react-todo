import React, { Component } from 'react'

export default class Tasks extends Component {
  handleRemoveTask = (event) => {
    this.props.removeTask(event.target.dataset.id)
  }

  handleToggleTask = (event) => {
    this.props.toggleTask(event.target.dataset.id)
  }


  render() {
    const { data } = this.props

    /* Active at the top, completed at the bottom,
       new ones appear after the last task of it's category */
    data.sort((a, b) => {
      if ((a.isActive && !b.isActive) || !a.isActive && !b.isActive) {
        return -1
      } else if (!a.isActive && b.isActive) {
        return 1
      } else {
        return 0
      }
    })

    return (
      <ul className="tasks">
        {data.map((task) =>
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
      </ul>
    )
  }
}
