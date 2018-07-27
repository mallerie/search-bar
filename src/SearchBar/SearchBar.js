import React, { Component } from 'react';
import data from '../data/clusters.json'

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
			results: data,
			queryResults: [],
			cleanResults: []
		};
	}

	componentWillMount() {
		console.log("data --->", data);

		let cleanResults = data.map(item => {
			return ({ id: item.id, name: item.name.toLowerCase() })
		});

		this.setState({
			cleanResults: cleanResults
		});
	}

	handleChange = (event) => {
		const searchQuery = event.target.value;
		this.setState({ query: event.target.value });

		if (searchQuery.length > 2) {
			this.filterSearchResults(searchQuery);
		}
	}

	filterSearchResults = (query) => {
		let cleanResults = this.state.cleanResults;
		let cleanQuery = query.toLowerCase();

		for (let i = 0; i < cleanResults.length; i++) {
			if (this.state.cleanResults[i].name.indexOf(cleanQuery) > -1) {
				console.log("we found it!");
			}
			else {
				console.log("not there!");
			}
		}
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