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
		const query = event.target.value;
		this.setState({ query: event.target.value });

		// if (searchQuery.length > 2) {
			this.searchData(query);
		// }
	}

	searchData = (query) => {
		let lowercaseData = this.state.lowercaseData;
		let cleanQuery = query.toLowerCase();
		let queryResults = [];

		for (let i = lowercaseData.length; i--;) {
			if (this.state.lowercaseData[i].name.indexOf(cleanQuery) !== -1) {
				queryResults.push(this.state.data[i]);
				this.setState({queryResults: queryResults});
			}
			else {
				//If user changes query, remove item from array
	
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