import React from 'react';

// Funtional component
// const SearchBar = () => {
//   return <input />;
// };

// Class component
class SearchBar extends React.Component {
  
  constructor(props) {
  	super(props);

  	this.state = { term : '' }
  }

  
  render() {
    return (
      <div>
        <input value={this.state.term} onChange={this.onInputChange.bind(this)} />
      </div>
    );
  }

  //event-handler
  onInputChange(event) {
  	this.setState( {term : event.target.value} );
  }

}

export default SearchBar;
