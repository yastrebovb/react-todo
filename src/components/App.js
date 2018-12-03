import React, { Component } from 'react'
import Header from './Header'
import Option from './Option'
import Tasks from './Tasks'
import Add from './Add'

export default class App extends Component {
  state = {
    data: [],
    sorting: 'active'
  }

  componentDidMount() {
    if (localStorage.data)
      this.setState({ data: JSON.parse(localStorage.getItem('data')) })

    window.addEventListener('beforeunload', () => localStorage.setItem('data', JSON.stringify(this.state.data)))
  }

  changeSortingMethod = methodName => {
    this.setState({
      sorting: methodName
    })
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
    data.map(el => el.id === +taskId ? el.isActive = !el.isActive : el.isActive)

    this.setState({
      data: data
    })
  }

  removeTask = taskId => {
    let { data } = this.state

    this.setState({
      data: data.filter(el => el.id !== +taskId)
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Option sortingMethod={this.changeSortingMethod} />
        <Tasks
          data={this.state.data}
          sortingMethod={this.state.sorting}
          toggleTask={this.toggleTask}
          removeTask={this.removeTask}
        />
        <Add addTask={this.addTask} />
      </div>
    )
  }
}
