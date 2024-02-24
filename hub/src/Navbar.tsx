import logo from "./icons/logo_icon.png";
import React from "react";
import "./Navbar.scss";

export function Navbar() {
  return (
    <div id="navbar">
      <div>
        <div id="home">
          <img src={logo} alt="JupiterPi logo" />
          JupiterPi
        </div>
        <div>Projects</div>
        <div>Music</div>
      </div>
    </div>
  );
}