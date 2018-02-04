import React from 'react';

const VideoDetail=({video})=>{

    if(!video){
        return <div>Loading..</div>
    }
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`; //ES6 feature
    return (
        <div className="video-detail">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details p-2">
                <h2>{video.snippet.title}</h2>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};
export default VideoDetail;