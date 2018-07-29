import React, { Component } from 'react';

export default class Display extends Component {
 render() {
  return(
    <div>
     <div>{this.props.title}</div>
     <div>{this.props.name}</div>
     <div>{this.props.id}</div>
     <div><button onClick={() => alert("change clicked")}>Change</button></div>
    </div>
  );
 }
}