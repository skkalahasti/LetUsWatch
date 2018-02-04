import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
import YTSearch from 'youtube-api-search';
import VideoList from "./components/video-list";
import VideoDetail from "./components/video-details";

const API_KEY = "AIzaSyDWfdtQjN_XrOXoqthkz3wLKahxhf6EDP0";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {videos: [], selectedVideo: null};

        this.videoSearch('Hello'); // initial search
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: {term}}, videos => {
            this.setState({videos: videos, selectedVideo: videos[0]})
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <SearchBar onSearch={term => this.videoSearch(term)}/>
                </div>
                <div className="row">
                    <div className="col-7">
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="col-5">
                        <VideoList
                            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                            videos={this.state.videos}/>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
