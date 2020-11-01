import React from "react";
import Logo from "./logo";
import SearchBar from "./search-bar";
import Icon from "./icon";
import Login from "./login";

/* Importar los componentes */

/* Importar los iconos */

export default function Navbar(props) {
  return (
    <div className="navbar">
      <Logo 
        logo = {props.logo}
      />
      <SearchBar />
      <Icon
        iconUrl = {props.newVideo}
      />
      <Icon
        iconUrl = {props.apps}
      />
      <Icon
        iconUrl = {props.notifications}
      />
      <Login />
    </div>
)
}
