import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCUtEguXqiblMT76WecBm7a2z1LnVAdi5M';

//Create a component consist of html element
const App = function() {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Ship this html element or component to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
