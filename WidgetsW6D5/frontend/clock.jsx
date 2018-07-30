import React from 'react';

class Clock extends React.Component{
  constructor(){
    super();
    this.state = {date: new Date()};
    this.tick = this.tick.bind(this);
  }

  tick(){
    this.setState({date: new Date()});
  }

  render(){
    return (
      <div className ="box">
        <div className="reloj">
          <div className="reloj-header">Time:</div>
          <div>
            { this.padding(this.state.date.getHours()) }:
            { this.padding(this.state.date.getMinutes()) }:
            { this.padding(this.state.date.getSeconds()) }
          </div>
        </div>
        <div className="reloj">
          <div className="reloj-header">Date:</div>
          <div>
            {this.state.date.toDateString()}
          </div>
        </div>
      </div>
    );
  }

  padding(num){
    return num < 10 ? "0" + num : num ;
  }

  componentDidMount() {
    this.intervalID = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    this.interval = clearInterval(this.intervalID);
  }
}

export default Clock;
