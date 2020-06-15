import React from 'react';
import { Count } from './Count';
import { Increment } from './Increment';
import { Decrement } from './Decrement';

export class App extends React.Component {
  state = {
    count: 0,
    step: 1,
  };

  increment = () => {
    this.setState((state) => ({ count: state.count + state.step }));
  };

  decrement = () => {
    this.setState((state) => ({ count: state.count - state.step }));
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <Count count={count} />
        <Increment onIncrement={this.increment} />
        <Decrement onDecrement={this.decrement} />
      </div>
    );
  }
}
