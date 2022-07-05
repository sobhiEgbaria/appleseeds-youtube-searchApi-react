import React from "react";

const VideosDetails = (props) => {
  if (!props.videoSelected) {
    return <h1>loading</h1>;
  }
  const videoToWatch = `https://www.youtube.com/embed/${props.videoSelected.id.videoId}`;
  return (
    <>
      <div>
        <div className="ui embed">
          <iframe title="video-player" src={videoToWatch} />
        </div>
        <div className="ui segment">
          <h4>{props.videoSelected.snippet.title}</h4>
          <p>{props.videoSelected.snippet.description}</p>
        </div>
      </div>
    </>
  );
};

export default VideosDetails;
