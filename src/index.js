import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
import YTSearch from 'youtube-api-search';
import VideoList from "./components/video-list";

const API_KEY = "AIzaSyDWfdtQjN_XrOXoqthkz3wLKahxhf6EDP0";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {videos: ''};

        YTSearch({key: API_KEY, term: 'hello'}, videos => { this.setState({videos}) });
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
