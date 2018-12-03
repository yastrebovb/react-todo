import React, { Component } from 'react';

export default class Header extends Component {
  state = {
    year: undefined,
    month: undefined,
    weekday: undefined,
    day: undefined
  }

  componentDidMount() {
    const now = new Date();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    this.setState({
      year: now.getFullYear(),
      month: months[now.getMonth()],
      weekday: weekdays[now.getDay()],
      day: now.getDate()
    })
  }

  render() {
    return (
      <div className="header">
        <p className="header__day">{this.state.day}</p>
        <div className="header__month-year">
          <p className="header__month">{this.state.month}</p>
          <p className="header__year">{this.state.year}</p>
        </div>
        <p className="header__weekday">{this.state.weekday}</p>
      </div>
    )
  }
}
