import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { count, hello } = this.props;
    return (
      <>
        <div>this will work!</div>
        <div className="counter-div">
          Items: {count} {hello}
        </div>
      </>
    );
  }
}

export default Counter;
