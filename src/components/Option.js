import React, { Component } from 'react'

export default class Option extends Component {
  handleSelect = e => {
    this.props.sortingMethod(e.target.value)
  }

  render() {
    return (
      <select onChange={this.handleSelect}>
        <option value="active" defaultValue>By active</option>
        <option value="completed">By completed</option>
        <option value="date">By date</option>
        <option value="alphabetical">In alphabetical order</option>
      </select>
    )
  }
}
