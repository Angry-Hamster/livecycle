import React, { Component } from "react";
import css from "./App.css";

import Modal from "./components/Modal/Modal";
import Clock from "./components/Clock/Clock";
import Tabs from "./components/Tabs/Tabs";

import phrases from "./phrases.json";

class App extends Component {
  state = {
    showModal: false,
    time: false,
  };

  openModal = () => {
    this.setState((prev) => {
      return { showModal: !prev.showModal };
    });
  };

  openTime = () => {
    this.setState((prev) => {
      return { time: !prev.time };
    });
  };

  render() {
    return (
      <div>
        {/* modal */}
        <button type="button" onClick={this.openModal}>{this.state.showModal ? 'close' : 'open'} modal</button>
        {this.state.showModal && (
          <Modal onClose={this.openModal}>
            <button onClick={this.openModal}>close modal</button>
          </Modal>
        )}

        {/* time */}
        <button type="button" onClick={this.openTime}>{this.state.time ? 'close' : 'open'} time</button>
        {this.state.time && (
          <Clock />
        )}

        {/* Tabs */}
        <Tabs phrases={phrases}/>

      </div>
    );
  }
}

export default App;
