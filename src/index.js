import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
import YTSearch from 'youtube-api-search';

const API_KEY = "AIzaSyDWfdtQjN_XrOXoqthkz3wLKahxhf6EDP0";

class App extends Component{

    constructor(props) {
        super(props);

        this.state ={videos:''};

        YTSearch({key: API_KEY, term:'Budhu'}, videos => this.setState(videos));
    }

    render() {
        return <SearchBar/>;
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
