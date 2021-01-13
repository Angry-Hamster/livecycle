import React, { Component } from "react";
import css from "./Modal.module.css";

class Modal extends Component {
  componentDidMount(){
    window.addEventListener('keydown', this.removeListener)
  }

  componentWillUnmount(){
    window.removeEventListener('keydown', this.removeListener)
  }

  removeListener= (e) => {
    e.key === 'Escape' && this.props.onClose()
  }

  render() {
    return (
      <div className={css.beckground}>
        <div className={css.window}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;
