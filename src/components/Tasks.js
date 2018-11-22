import React, { Component } from 'react'
import sort from '../actions/sort'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../stylesheets/animations.css'

export default class Tasks extends Component {
  componentDidMount() {
    console.log('componetn did omiunt')
  }

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
      <TransitionGroup>
        {data.map((task) =>
          <CSSTransition
            key={task.id}
            timeout={300}
            classNames="move"
          >
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
          </CSSTransition>
        )}
      </TransitionGroup>)

    return (
      <ul className="tasks">
        {tasks}
      </ul>
    )
  }
}
