import React, { Component } from 'react';

export default class Display extends Component {
  handleClearApp = () => {
    this.props.onClick();
  }

  render() {
    let { result } = this.props;

    return (
      <div>
        <div>{this.props.title}</div>
        <div>{result.name}</div>
        <div>{result.id}</div>
        <div><button onClick={this.handleClearApp}>Change</button></div>
      </div>
    );
  }
}