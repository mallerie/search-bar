import React, { Component } from 'react';
import data from '../data/clusters.json'

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
			data: data,
			queryResults: [],
			lowercaseData: []
		};
	}

	componentWillMount() {
		let lowercaseData = data.map(item => {
			return ({ id: item.id, name: item.name.toLowerCase() })
		});

		this.setState({
			lowercaseData: lowercaseData
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
		let lowercaseData = this.state.lowercaseData;
		let cleanQuery = query.toLowerCase();

		for (let i = lowercaseData.length; i--;) {
			if (this.state.lowercaseData[i].name.indexOf(cleanQuery) > -1) {
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