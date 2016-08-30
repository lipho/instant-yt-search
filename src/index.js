import React from 'react';
import ReactDOM from 'react-dom';
import secret from './secret';
import SearchBar from './components/search_bar';

const API_KEY = secret.youtube;

//Create a new React Component.  This component should produce some HTML
const App = function () {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));