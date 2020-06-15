import React from 'react';

export class Decrement extends React.Component {
  render() {
    return <button onClick={this.props.onDecrement}>-</button>;
  }
}
