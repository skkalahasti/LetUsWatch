import React, {Component} from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);

        // this.state = {inputValue: ''};
    }

    render() {
        return (
            <div className="search-bar row m-2">
                <input className="form-control col-11"
                       value={this.props.searchTerm}
                       onChange={event => this.setState({inputValue: event.target.value})}/>
                    <button className="btn btn-outline-secondary col-1">
                        Search
                    </button>
            </div>
        );
    }
}