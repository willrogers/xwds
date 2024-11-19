import React from "react";

/* Copied to match main.html from the main site. */

class Header extends React.Component {
  public props: { parentUrl: string };
  componentDidMount(): void {
    const script = document.createElement("script");
    script.src = this.props.parentUrl + "/js/menu.js";
    script.async = true;
    document.body.appendChild(script);
  }
  render(): JSX.Element {
    return (
      <div id="header">
        <div id="menu">
          <div id="logo">
            <div id="logo-img">
              <img
                src={this.props.parentUrl + "/static/logo.png"}
                alt="pattern"
              />
            </div>
            <a id="name-logo" href={this.props.parentUrl + "/index.html"}>
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
              <a href={this.props.parentUrl + "/index.html"}>WR</a>
              <img
                id="sidebar-logo"
                src={this.props.parentUrl + "/static/logo.png"}
                alt="pattern"
              />
            </div>
            <ul className="nav-items">
              <li className="header-nav-item">
                <a href={this.props.parentUrl + "/index.html"}>Blog</a>
              </li>
              <li className="header-nav-item">
                <a href={this.props.parentUrl + "/about.html"}>About</a>
              </li>
              <li className="header-nav-item">
                <a href={this.props.parentUrl + "/links.html"}>Links</a>
              </li>
              <li className="header-nav-item">
                <a href={this.props.parentUrl + "/xwds"}>Crosswords</a>
              </li>
              <li className="header-nav-item">
                <a href="https://github.com/willrogers">
                  <img
                    className="header-nav-github"
                    src={this.props.parentUrl + "/static/GitHub-Mark-64px.png"}
                    alt="github"
                  ></img>
                </a>
              </li>
              <li className="header-nav-item">
                <a href="https://bsky.app/profile/wrgrs.bsky.social">
                  <img
                    className="header-nav-bluesky"
                    src={this.props.parentUrl + "/static/bluesky.svg"}
                    alt="twitter"
                  ></img>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
