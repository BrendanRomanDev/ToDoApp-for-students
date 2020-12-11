import React, { Component } from "react";

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <div className="counter-div">
        <button onClick={() => this.increment()}>{this.state.count}</button>
      </div>
    );
  }
}

export default ClickCounter;
