import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import Dropdown from '../Dropdown/Dropdown';
import searchData from '../utils/searchData.js';


export default class App extends Component { 
  constructor(props) {
		super(props);
    
    this.state = {
      queryResults: []
    };
  }
  
  handleChange = (event) => {    
    this.setState({
      queryResults: searchData(event.target.value)
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar onChange={this.handleChange} /> 
        <Dropdown list={this.state.queryResults} />
      </div>
    );
  }
}
