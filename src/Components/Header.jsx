import React, { Component } from "react";
import { Link } from "@reach/router";
import "../css/styles.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Ruth Sargent</h1>
        <nav className="navbar">
          <Link className="link" to="/about">
            <p id="about">About Me |</p>
          </Link>
          <Link className="link" to="/projects">
            <p id="projects">Projects |</p>
          </Link>
          <p>Contact</p>
        </nav>
      </div>
    );
  }
}

export default Header;
