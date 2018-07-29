import React, { Component } from 'react';

export default class Dropdown extends Component {
  render() {
    return (
      <ul className="dropdown">
        {this.props.list.map(listItem => {
          return <li>{listItem.name}</li>
        })}
      </ul>
    );
  }
}