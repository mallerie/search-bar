import React, { Component } from 'react';

export default class Display extends Component {
  handleClearApp = () => {
    this.props.onClick();
  }

  shortenId = (id) => {
    let shortId = id.slice(0, 6);
    return shortId
  }

  render() {
    let { result } = this.props;

    return (
      <div className="display">
        <div className="title-name">
          <div className="title">{this.props.title}</div>
          <div className="result">{result.name}  ({this.shortenId(result.id)})</div>
        </div>  
        <button onClick={this.handleClearApp}>Change</button>
      </div>
    );
  }
}