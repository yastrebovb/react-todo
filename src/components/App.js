import React, { Component } from 'react'
import Header from './Header'
import Tasks from './Tasks'
import Add from './Add'

export default class App extends Component {
  state = {
    data: [
      {
        value: 'Buy some milk',
        isActive: true,
        id: 1
      },
      {
        value: 'Watch last late-night show',
        isActive: true,
        id: 2
      },
      {
        value: 'Do 100 push-ups',
        isActive: false,
        id: 3
      }
    ]
  }

  componentDidMount() {
    if (localStorage.data) this.setState({ data: JSON.parse(localStorage.getItem('data')) })

    window.addEventListener('beforeunload', this.saveStateToLocalStorage)
  }

  saveStateToLocalStorage = () => {
    localStorage.setItem('data', JSON.stringify(this.state.data))
  }

  addTask = taskValue => {
    const newTask = {
      value: taskValue,
      isActive: true,
      id: Date.now()
    }

    this.setState({
      data: [...this.state.data, newTask]
    })
  }

  toggleTask = taskId => {
    let { data } = this.state
    data.map((el) => el.id === +taskId ? el.isActive = !el.isActive : el.isActive)

    this.setState({
      data: data
    })
  }

  removeTask = taskId => {
    let { data } = this.state

    this.setState({
      data: data.filter((el) => el.id !== +taskId)
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Tasks
          data={this.state.data}
          toggleTask={this.toggleTask}
          removeTask={this.removeTask}
        />
        <Add addTask={this.addTask} />
      </div>
    )
  }
}
