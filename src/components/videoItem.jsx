import React from "react";
import "./videoItem.css";

const VideoItem = (props) => {
  return (
    <>
      <div
        className="item video-item"
        onClick={() => props.onVideoSelected(props.item)}
      >
        <img
          className="ui image"
          src={props.item.snippet.thumbnails.medium.url}
          alt="pleas waite loading"
        />
        <div className="content">
          <div className="header">{props.item.snippet.title}</div>
        </div>
      </div>
    </>
  );
};

export default VideoItem;
