import React from "react";
import "./styles.css";

import { Sidebar } from "./components/sidebar";
import Navbar from "./components/navbar";
import { ThumbContainer } from "./components/thumb-container";

import fireIcon from "./icons/iconfinder_Icon_Element_Fire_03_513726.png";
import homeIcon from "./icons/iconfinder_ic_home_48px_3669170.png";
import playlist from "./icons/iconfinder_ic_playlist_play_48px_3669290.png";
import subscriptionsIcon from "./icons/iconfinder_ic_subscriptions_48px_3669213.png";
import logo from "./icons/iconfinder_youtube_294703.png";
import newVideo from "./icons/iconfinder_ic_videocam_48px_3669181.png"
import apps from "./icons/iconfinder_ic_view_module_48px_3669149.png"
import notifications from "./icons/iconfinder_icon-ios7-bell_211694.png"

import video1 from "./images/video1.jpg"
import video2 from "./images/video2.jpg"
import video3 from "./images/video3.jpg"
import video4 from "./images/video4.jpg"
import video5 from "./images/video5.jpg"
import video6 from "./images/video6.jpg"
import video7 from "./images/video7.jpg"
import video8 from "./images/video8.jpg"

const menuItems = [
  {
    icon: homeIcon,
    title: "Principal"
  },
  {
    icon: fireIcon,
    title: "Tendencias"
  },
  {
    icon: subscriptionsIcon,
    title: "Suscripciones"
  },
  {
    icon: playlist,
    title: "Biblioteca"
  }
];

function App() {
  return (
    <div className="App">
      <Sidebar icons={menuItems} />

      <Navbar 
        logo = {logo}
        newVideo = {newVideo}
        apps = {apps}
        notifications = {notifications}
      />

      <ThumbContainer
        video1 = {video1}
        video2 = {video2}
        video3 = {video3}
        video4 = {video4}
        video5 = {video5}
        video6 = {video6}
        video7 = {video7}
        video8 = {video8}
      />
    </div>
  );
}

export default App;
