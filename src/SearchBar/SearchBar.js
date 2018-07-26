import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { query: '' };
	}

	componentWillMount() {
    fetch('https://api.github.com/gists/ec791a5c4cc6507f7c814b24a5ac750b')
      .then(results => {
        return results.json();
      })
      .then(data => {
        console.log(data.files['clusters.json'].content);
      });
  }

	handleChange = (event) => {
		const searchQuery = event.target.value;
		this.setState({query: event.target.value});
		console.log(searchQuery);
	}

	render() {
		return (
			<div>
				<input 
					type="text" 
					placeholder="search" 
					value={this.state.query}
					onChange={this.handleChange} />
			</div>
		);
	}
}