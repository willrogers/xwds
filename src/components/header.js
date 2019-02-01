import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <div id="header">
    <div id="menu">
      <div id="logo">
        <div id="monkey">
          <img src="https://wllrg.rs/static/monkey.png" alt="monkey" />
        </div>
        <div id="name-logo">
          <a href="/index.html">Will Rogers</a>
        </div>
      </div>
      <label id="toggle-label"></label>
      <input type="checkbox" id="toggle-menu" name="toggle-label" checked />
      <nav>
        <div id="menu-header">
          <a href="/index.html">WR</a>
          <img src="/static/monkey.png" alt="monkey" />
        </div>
        <ul class="nav-items">
          <li class="header-nav-item"><a href="https://wllrg.rs/index.html">Blog</a></li>
          <li class="header-nav-item"><a href="https://wllrg.rs/about.html">About</a></li>
          <li class="header-nav-item"><a href="/">Crosswords</a></li>
          <li class="header-nav-item"><a href="https://github.com/willrogers">Github</a></li>
          <li class="header-nav-item"><a href="https://wllrg.rs/links.html">Links</a></li>
        </ul>
      </nav>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
