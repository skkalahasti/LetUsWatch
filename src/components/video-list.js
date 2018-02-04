import React, {Component} from 'react';
import VideoListItem from "./video-list-item";

/*
export default class VideoList extends Component {

    videoItems = this.props.videos.map(video => {
        return <VideoListItem key={video.etag} video={video}/>
    });

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.videoItems}
            </div>
        )
    }
}
*/

const VideoList = ({videos, onVideoSelect}) => {
    const VideoItems = videos.map(video => { return (
    <VideoListItem onVideoSelect={onVideoSelect} key={video.etag} video = {video}/>
    )});

    return (
        <ul className="list-group">
            {VideoItems}
        </ul>
    );
  };

export default VideoList;
