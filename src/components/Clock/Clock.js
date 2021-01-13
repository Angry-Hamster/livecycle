import React, { Component } from "react";
import css from "./Clock.modal.css";

class Clock extends Component {
  state ={
    time: new Date().toLocaleDateString(),
  }

  constructor(p){
    super(p)
    this.ntervalID = null
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState({
        time: new Date().toLocaleDateString(),
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  render() {
    return (
      <div>
        <p className={css.clock}>{this.state.time}</p>
      </div>
    );
  }
}

export default Clock;