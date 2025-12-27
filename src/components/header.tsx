import { useEffect } from "react";

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
        <div id="menu-icon">
          <svg
            viewBox="0 0 24 22"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path d="M24,18 L24,22 L0,22 L0,18 L24,18 Z M24,9 L24,13 L0,13 L0,9 L24,9 Z M24,0 L24,4 L0,4 L0,0 L24,0 Z"></path>
          </svg>
        </div>
        <input type="checkbox" id="toggle-menu" defaultChecked />
        <nav className="hide-menu">
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
