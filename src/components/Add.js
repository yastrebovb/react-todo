import React, { Component } from 'react'

export default class Add extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userInput: ''
    }
  }

  componentDidUpdate() {
    this.textInput.focus()
  }

  handleInput = e => {
    if (e.target.value.length < 25)
      this.setState({ userInput: e.target.value })
  }

  handleFormSubmit = e => {
    e.preventDefault()

    if (this.state.userInput)
      this.props.addTask(this.state.userInput)

    this.setState({ userInput: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className='add'>
        <input
          type="text"
          className="add__input"
          value={this.state.userInput}
          ref={node => this.textInput = node}
          onChange={this.handleInput}
        />
        <input
          type="submit"
          className="add__btn"
          value="+"
        />
      </form>
    )
  }
}
