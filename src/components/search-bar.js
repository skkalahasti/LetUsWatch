import React, {Component} from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {inputValue: ''};
    }

    render() {
        return (
            <div>
                <input value={this.state.inputValue}
                       onChange={event => this.setState({inputValue: event.target.value})}/>
            </div>
        );
    }
}