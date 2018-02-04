import React, {Component} from 'react';

export default class VideoListItem extends Component{

    constructor(props) {
        super(props);
    }
    render() {
        const imageUrl = this.props.video.snippet.thumbnails.default.url;
     return (
         <li className="list-group-item" onClick={() => this.props.onVideoSelect(this.props.video)}>
             <div className="video-list media">
                 <div className="media-left">
                     <img className="media-object" src={imageUrl}/>
                 </div>
                 <div className="media-body p-2">
                     <div className="media-heading">{this.props.video.snippet.title}</div>
                 </div>
             </div>

         </li>
     );
    }
}