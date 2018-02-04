import React, {Component} from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {inputValue: ''};
    }

    searchForVideos() {
        this.props.onSearch(this.state.inputValue);
    }

    render() {
        return (
            <div className="search-bar row m-2">
                <input className="form-control col-11"
                       value={this.state.inputValue}
                       onChange={event => this.setState({inputValue: event.target.value})}/>
                    <button className="btn btn-outline-primary col-1" onClick= {() => this.searchForVideos()} >
                        Search
                    </button>
            </div>
        );
    }
}