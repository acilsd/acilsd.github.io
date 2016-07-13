import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} class='list-group-item'>
      <div class='video-list media'>
        <div class='media-left'>
          <img class='media-object' src={imageUrl}/>
        </div>
        <div class='media-body'>
          <div class='media-heading'>{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
