import React, { Component } from 'react';
import '../css/clock.css';

class Clock extends Component {

  constructor(props){
    super(props);
    this.state = {time:new Date()}
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  render() {
    return (
      <div className="col-2 clock">
        <h1>{this.state.time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false})}</h1>
        <p>{this.props.currentDate.dayString} {this.props.currentDate.date}, {this.props.currentDate.monthString}</p>
      </div>
    );
  }
}

export default Clock;
