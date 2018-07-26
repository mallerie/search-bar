import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';

class App extends Component {
  componentWillMount() {
    fetch('https://api.github.com/gists/ec791a5c4cc6507f7c814b24a5ac750b')
      .then(results => {
        return results.json();
      })
      .then(data => {
        console.log(data.files['clusters.json'].content);
      });
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

export default App;
