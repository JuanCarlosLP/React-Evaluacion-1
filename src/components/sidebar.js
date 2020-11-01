import React from "react";
import Icon from "./icon"

export function Sidebar(props) {
  return (
    <div className="sidebar">
      <Icon 
        iconUrl = {props.icons[0].icon}
        title = {props.icons[0].title}
      />
      <Icon 
        iconUrl = {props.icons[1].icon}
        title = {props.icons[1].title}
      />
      <Icon 
        iconUrl = {props.icons[2].icon}
        title = {props.icons[2].title}
      />
      <Icon 
        iconUrl = {props.icons[3].icon}
        title = {props.icons[3].title}
      />
    </div>
  )
}
