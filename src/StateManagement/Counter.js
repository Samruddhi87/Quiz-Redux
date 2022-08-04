import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  Increment() {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  }
  Decrement() {
    this.setState({
      count: this.state.count - 1,
    });
    console.log(this.state.count);
  }

  Reset() {
    this.setState({
      count: 0,
    });
  }

  IncreFive() {
    this.setState({
      count: this.state.count + 5,
    });
  }

  render() {
    return (
      <>
        <div> Count -{this.state.count}</div>
        <button onClick={() => this.Increment()}>Increment</button>
        <button onClick={() => this.Decrement()}>Decrement</button>
        <button onClick={() => this.Reset()}>Reset</button>
        <button onClick={() => this.IncreFive()}>IncreFive</button>
      </>
    );
  }
}
