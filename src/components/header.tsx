import React, { useEffect } from "react";

/* Copied to match main.html from the main site. */

const Header = (props: { parentUrl: string }) => {
  useEffect(() => {
    /* Add external script. */
    const script = document.createElement("script");
    script.src = props.parentUrl + "/js/menu.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div id="header">
      <div id="menu">
        <div id="logo">
          <div id="logo-img" className="rotator">
            <img src={props.parentUrl + "/static/logo.png"} alt="pattern" />
          </div>
          <a id="name-logo" href={props.parentUrl + "/index.html"}>
            Will Rogers
          </a>
        </div>
        <label id="toggle-label"></label>
        <input
          type="checkbox"
          id="toggle-menu"
          name="toggle-label"
          defaultChecked
        />
        <nav>
          <div id="menu-header">
            <a href={props.parentUrl + "/index.html"}>WR</a>
            <img
              id="sidebar-logo"
              src={props.parentUrl + "/static/logo.png"}
              alt="pattern"
            />
          </div>
          <ul className="nav-items">
            <li className="header-nav-item">
              <a href={props.parentUrl + "/index"}>Blog</a>
            </li>
            <li className="header-nav-item">
              <a href={props.parentUrl + "/about"}>About</a>
            </li>
            <li className="header-nav-item">
              <a href={props.parentUrl + "/links"}>Links</a>
            </li>
            <li className="header-nav-item">
              <a href={props.parentUrl + "/xwds"}>Crosswords</a>
            </li>
            <li className="header-nav-item">
              <a href="https://github.com/willrogers" className="rotator">
                <img
                  className="header-nav-github"
                  src={props.parentUrl + "/static/GitHub-Mark-64px.png"}
                  alt="github"
                ></img>
              </a>
            </li>
            <li className="header-nav-item">
              <a
                href="https://bsky.app/profile/wrgrs.bsky.social"
                className="rotator"
              >
                <img
                  className="header-nav-bluesky"
                  src={props.parentUrl + "/static/bluesky.svg"}
                  alt="twitter"
                ></img>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
