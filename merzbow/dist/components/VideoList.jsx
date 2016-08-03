import React from 'react';
import VideoItem from './VideoItem.jsx';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });

  return (
    <ul class='col-md-4 list-group'>
      {videoItems}
    </ul>
  );
};

export default VideoList;
