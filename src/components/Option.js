import React, { Component } from 'react'

export default class Option extends Component {
  state = {
    isVisible: false
  }

  toggleVisibility = (e) => this.setState({isVisible: !this.state.isVisible})
  
  handleSelect = e => {
    this.toggleVisibility()
    this.props.sortingMethod(e.target.dataset.value)
  }

  render() {
    const options = (
      <div onClick={this.handleSelect} className="sorting__options">
        <p data-value="active">Active</p>
        <p data-value="completed">Completed</p>
        <p data-value="date">Creation date</p>
        <p data-value="alphabetical">Alhabetically</p>
      </div>)

    return (
      <div className="sorting">
        <div onClick={this.toggleVisibility} className="sorting-icon" />
        {this.state.isVisible && options}
      </div>
    )
  }
}
