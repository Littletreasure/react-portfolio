import React, { Component } from "react";
import "../css/styles.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Ruth Sargent</h1>
        <nav className="navbar">
          <p>About Me</p>
          <p>Projects</p>
          <p>Contact</p>
        </nav>
      </div>
    );
  }
}

export default Header;
