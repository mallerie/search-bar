import React, { Component } from 'react';

export default class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSelectedResult: false
    };
  }

  handleSelectResult = (index) => {
    this.props.handleClick(index);
  }

  shortenId = (id) => {
    let shortId = id.slice(0, 6);
    return shortId
  }

  render() {
    return (
      <div className="dropdown">
        <ul>
          {this.props.list.map((listItem, index) => {
            return <li onClick={() => this.handleSelectResult(index)} 
                       key={listItem.id}>{listItem.name}({this.shortenId(listItem.id)})
                   </li>
          })}
        </ul>
      </div>
    );
  }
}