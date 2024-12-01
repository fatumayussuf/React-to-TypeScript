import React, { Component } from 'react';

// Define the type for the component's state
interface CounterState {
  count: number; // The state 'count' should be a number
}

class Counter extends Component<{}, CounterState> {
  // Define the initial state with count set to 0
  state: CounterState = {
    count: 0
  };

  // Increment function to update the state
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
