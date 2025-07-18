"use client";

import "./Navbar.scss";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import className from "classnames";
import Link from "next/link";

export function Navbar() {
  const path = usePathname();
  const [expand, setExpand] = useState(false);

  const navigationContent = (
    <>
      <Link href="/projects" className={path === "/projects" ? "active" : undefined}>Projects</Link>
      <Link href="/music" className={path === "/music" ? "active" : undefined}>Music</Link>
    </>
  );

  useEffect(() => {
    setExpand(false);
  }, [path]);

  return (
    <>
      <div id="navbar">
        <div>
          <Link id="home" href="/">
            <img src="/icons/logo.png" alt="JupiterPi logo" />
            JupiterPi
          </Link>
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