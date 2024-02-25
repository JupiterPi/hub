"use client";

import "./Navbar.scss";
import {usePathname} from "next/navigation";
import {useState} from "react";
import className from "classnames";

export function Navbar() {
  const path = usePathname();
  const [expand, setExpand] = useState(false);

  const navigationContent = (
    <>
      <a href="/projects" className={path === "/projects" ? "active" : undefined}>Projects</a>
      <a href="/music" className={path === "/music" ? "active" : undefined}>Music</a>
    </>
  );

  return (
    <>
      <div id="navbar">
        <div>
          <a id="home" href="/">
            <img src="/icons/logo_icon.png" alt="JupiterPi logo" />
            JupiterPi
          </a>
          <div id="button-container">
            <button onClick={() => setExpand(expand => !expand)}>
              <img src="/icons/menu_icon.png" height={20} />
            </button>
          </div>
          <div id="navbar-navigation" className={className("navigation-container", {"expand": expand})}>
            {navigationContent}
          </div>
        </div>
      </div>
      {expand && <div id="secondary-navbar">
        <div className="navigation-container">
          {navigationContent}
        </div>
      </div>}
    </>
  );
}