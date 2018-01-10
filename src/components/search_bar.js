import React, { Component } from 'react';

// Funtional component
const SearchBar = () => {
  return <input />;
};

// console.log('Component', Component);

// Class component
// class SearchBar extends Component {

// 	constructor(props) {
// 		super(props);

// 		this.state = { term: '' };
// 	}

// 	render() {
// 		return (
// 				<div>
// 					<input
// 						value = {this.state.term}
// 						onChange = { event => { this.setState({ term: event.target.value }); } }
// 					/>
// 				</div>
// 			)

// 	}
// }

export default SearchBar;
