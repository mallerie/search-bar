import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class SearchBar extends Component {
	handleChange = (event) => {
		this.props.onChange(event);
	};

	render() {
		return (
			<div>
				<input
					type="text"
					placeholder={"Search by cluster id or name ..."}
					ref={this.props.query}
					onChange={this.handleChange} />
			</div>
		);
	}
}

SearchBar.propTypes = {
	onChange: PropTypes.func
}