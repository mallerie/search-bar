import React, { Component } from 'react';
import './App.css';
import data from '../data/clusters'
import SearchBar from '../SearchBar/SearchBar';
import Dropdown from '../Dropdown/Dropdown';
import searchData from '../utils/searchData.js';
import Display from '../Display/Display';


export default class App extends Component { 
  constructor(props) {
		super(props);
    
    this.state = {
      selectedIndex: [],
      filteredList: [],
      items: data,
      showDisplay: null
    };
  }

  handleClearApp = () => {
    this.setState({
      selectedIndex: [],
      filteredList: [],
      items: data,
      showDisplay: null
    })

    this.query.value = "";

  }

  searchData = (query) => {
    let lowercaseData = data.map(item => {
        return ({ id: item.id, name: item.name.toLowerCase() })
    });
    let queryResults = [];
    let emptyArray = [];
  
    for (let i = 0; i < lowercaseData.length; i++) {
     if (lowercaseData[i].name.indexOf(query.toLowerCase()) !== -1 || lowercaseData[i].id.indexOf(query.toLowerCase()) !== -1) {
      queryResults.push(data[i]);
     }
    }
  
    //Return empty array if there is 
    //no query
    if (!query) {
     queryResults = emptyArray;
    }
  
    return queryResults;
  }

  handleInputClear = () => {
   this.query.value = "test!"
    console.log('query :', this.query.value);
  }
  
  handleQueryChange = (event) => {    
    this.setState({
      filteredList: searchData(event.target.value)
    });
  }

  handleClick = (selectedIndex) => {
    this.setState({ 
      selectedIndex,
      showDisplay: true
     });
  }

  render() {
    let { showDisplay } = this.state;
    return (
      <div className="App">
        <SearchBar query={input => this.query = input} onChange={this.handleQueryChange} onClear={this.handleInputClear} /> 
        <Dropdown handleClick={this.handleClick} list={this.state.filteredList} />
        {showDisplay && <Display title={"Selected Result"} onClick={this.handleClearApp} result={this.state.filteredList[this.state.selectedIndex]}/>}
      </div>
    );
  }
}
