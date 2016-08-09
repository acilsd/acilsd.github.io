import React from 'react';

const VideoDetail = ({video}) => {
  if(!video) {
    return <h3 class='slow-loading'>Loading searchquery...</h3>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div class='video-detail col-md-8'>
      <div class='embed-responsive embed-responsive-16by9'>
        <iframe class='embed-responsive-item' src={url}></iframe>
      </div>
      <div class='details'>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
