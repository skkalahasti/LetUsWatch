import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';

const App = () => {
    return <SearchBar/>
}

ReactDOM.render(<App />, document.querySelector('.container'));
