import React from "react";
import VideoThumbnail from "./video-thumbnail"

export function ThumbContainer(props) {
  return (
    <div className="thumb-container">
      <VideoThumbnail
        image = {props.video1}
      />
      <VideoThumbnail
        image = {props.video2}
      />
      <VideoThumbnail
        image = {props.video3}
      />
      <VideoThumbnail
        image = {props.video4}
      />
      <VideoThumbnail
        image = {props.video5}
      />
      <VideoThumbnail
        image = {props.video6}
      />
      <VideoThumbnail
        image = {props.video7}
      />
      <VideoThumbnail
        image = {props.video8}
      />
    </div>
)
}
