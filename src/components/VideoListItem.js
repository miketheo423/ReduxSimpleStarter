import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // by using {video} as the argument, you don't need to declare the below lines
  // const video = props.video;
  // const onVideoSelect = props.onVideoSelect;
  // console.log(video);
  const imageUrl = video.snippet.thumbnails.default.url;
  return(
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <image className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;