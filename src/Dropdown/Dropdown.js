import React, { Component } from 'react';
import Display from '../Display/Display';

export default class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSelectedResult: false
    };
  }

  shortenId = (id) => {
    let shortId = id.slice(0, 6);
    return shortId
  }

  handleSelectResult = (item) => {
    this.setState({
      showSelectedResult: true,
      result: item
    });
  }

  render() {
    let { showSelectedResult, result } = this.state;
    return (
      <div>
        <ul className="dropdown">
          {this.props.list.map(listItem => {
            return <li onClick={() => this.handleSelectResult(listItem)} key={listItem.id}>{listItem.name}({this.shortenId(listItem.id)})</li>
          })}
        </ul>
        {showSelectedResult &&
          <Display
            title={"Selected Cluster"}
            name={result.name}
            id={result.id}
          />}
      </div>
    );
  }
}