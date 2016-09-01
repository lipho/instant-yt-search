import React from 'react'

const VideoListItem = ({video, onVideoSelect}) => {
  let imgUrl = video.snippet.thumbnails.default.url;
  let title = video.snippet.title;

  return (
    <li
      className="list-group-item"
      /**
       * Comes from App > Video List Updates main video to clicked on video
       */
      onClick={() => onVideoSelect(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img src={imgUrl} alt="" className="media-object"/>
        </div>

        <div className="media-body">
          <div className="media-heading">{title}</div>
        </div>
      </div>
    </li>
  )
};

export default VideoListItem;