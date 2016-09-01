import React from 'react'

const VideoDetail = ({video}) => {
  if (!video) return <div>Loading...</div>;
  let title = video.snippet.title;
  let desc = video.snippet.description;
  let vidID = video.id.videoId;
  let url = `https://www.youtube.com/embed/${vidID}`;
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={url} frameBorder="0" className="embed-responsive-item"></iframe>
      </div>
      <div className="details">
        <div>{title}</div>
        <div>{desc}</div>
      </div>
    </div>
  )
};

export default VideoDetail;