import React from "react";
import VideoItem from "./videoItem";

const VideoList = (props) => {
  const listOfTheItems = props.videos.map((item) => {
    return (
      <VideoItem
        key={item.id.videoId}
        item={item}
        onVideoSelected={props.onVideoSelected}
      />
    );
  });

  return (
    <>
      <div className="ui relaxed divided list">{listOfTheItems}</div>
    </>
  );
};

export default VideoList;
