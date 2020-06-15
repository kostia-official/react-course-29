import React from 'react';

export class Increment extends React.Component {
  render() {
    return <button onClick={this.props.onIncrement}>+</button>;
  }
}
