import React, { Component } from "react";
import css from "./Tabs.modal.css";

class Tabs extends Component {
  state = {
    index: 0
  };

  setIndx = (indx) => {
    this.setState({index: indx})
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.index !== this.state.index;
  }

  render() {
    const { phrases } = this.props;
    // console.table(phrases);
    const { index } = this.state
    const item = phrases[index]
    return (
      <>
        {phrases.map((e, indx) => {
          return (
            <button type="button" key={indx} onClick={() => this.setIndx(indx)}>
              {e.label}
            </button>
          );
        })}

        <div>
          <h3>{item.label}</h3>
          <p>{item.content}</p>
        </div>
      </>
    );
  }
}

export default Tabs;
