import React, {Component} from 'react';

export default class VideoList extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <p>{this.props.videos.length}</p>
    }
}

/*
const VideoList = (props) => { return <div> {props.videos.length} </div> };

export default VideoList;*/
