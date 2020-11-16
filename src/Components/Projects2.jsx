import React, { Component } from "react";
import { Link } from "@reach/router";
import "../css/styles.css";

class Projects2 extends Component {
  render() {
    return (
      <div className="projects" id="projects">
        <h2>These are some of my projects</h2>
        <div className="projects-container">
          <Link className="proj-link" to="/project/12">
            <div className="project-tile">
              <p>Animal Crossing Site</p>
              <img
                src={require("../images/ac_screen.jpeg")}
                alt="animal crossing"
              />
            </div>
          </Link>
          <Link className="proj-link" to="/project/11">
            <div className="project-tile">
              <p>Manchestar App</p>
              <img
                src={require("../images/manchestar.png")}
                alt="Manchestar App"
              />
            </div>
          </Link>
          <Link className="proj-link" to="/project/10">
            <div className="project-tile">
              <p>NC News</p>
              <img src={require("../images/ncnews.jpeg")} alt="nc news" />
            </div>
          </Link>

          <Link className="proj-link" to="/project/9">
            <div className="project-tile">
              <p>Noughts & Crosses</p>
              <img
                src={require("../images/ncgame.jpeg")}
                alt="noughts crosses game"
              />
            </div>
          </Link>
          <Link className="proj-link" to="/project/8">
            <div className="project-tile">
              <p>Chuck Norris Jokes</p>
              <img
                src={require("../images/chuckjokes.jpeg")}
                alt="chuck norris jokes"
              />
            </div>
          </Link>
          <Link className="proj-link" to="/project/7">
            <div className="project-tile">
              <p>Survey Form</p>
              <img
                src={require("../images/surveyform.jpeg")}
                alt="survey form"
              />
            </div>
          </Link>
          <Link className="proj-link" to="/project/6">
            <div className="project-tile">
              <p>Landing Page</p>
              <img
                src={require("../images/landing-page.jpeg")}
                alt="landing page"
              />
            </div>
          </Link>
          <Link className="proj-link" to="/project/5">
            <div className="project-tile">
              <p>Tribute Page</p>
              <img
                src={require("../images/tribute-page.jpeg")}
                alt="tribute page"
              />
            </div>
          </Link>
          <Link className="proj-link" to="/project/4">
            <div className="project-tile">
              <p>Quote Finder</p>
              <img
                src={require("../images/quotefinder.jpeg")}
                alt="quote finder"
              />
            </div>
          </Link>
          <Link className="proj-link" to="/project/3">
            <div className="project-tile">
              <p>Markdown Previewer</p>
              <img
                src={require("../images/markdown.jpeg")}
                alt="markdown previewer"
              />
            </div>
          </Link>
          <Link className="proj-link" to="/project/2">
            <div className="project-tile">
              <p>Calculator</p>
              <img
                src={require("../images/calculator.jpeg")}
                alt="calculator"
              />
            </div>
          </Link>
          <Link className="proj-link" to="/project/1">
            <div className="project-tile">
              <p>Drum Machine</p>
              <img
                src={require("../images/drum-machine.jpeg")}
                alt="drum machine"
              />
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Projects2;
