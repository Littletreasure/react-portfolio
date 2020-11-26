import React, { Component } from "react";
import Modal from "./Modal";
import "../css/styles.css";

class Projects extends Component {
  state = {
    show: false,
    imgnum: null,
  };

  showModal = (num) => {
    this.setState({ show: true, imgnum: num });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <div className="projects" id="projects">
        <h2>These are some of my projects</h2>
        <div className="projects-container">
          <div onClick={() => this.showModal(13)} className="project-tile">
            <p>Auction Page</p>
            <img src={require("../images/auction.jpg")} alt="auction page" />
          </div>
          <div onClick={() => this.showModal(12)} className="project-tile">
            <p>Animal Crossing Site</p>
            <img
              src={require("../images/ac_screen.jpeg")}
              alt="animal crossing"
            />
          </div>
          <div onClick={() => this.showModal(11)} className="project-tile">
            <p>Manchestar App</p>
            <img
              src={require("../images/manchestar.png")}
              alt="manchestar app"
            />
          </div>
          <div onClick={() => this.showModal(10)} className="project-tile">
            <p>NC News</p>
            <img src={require("../images/ncnews.jpeg")} alt="nc news" />
          </div>
          <div onClick={() => this.showModal(9)} className="project-tile">
            <p>Noughts & Crosses</p>
            <img
              src={require("../images/ncgame.jpeg")}
              alt="noughts crosses game"
            />
          </div>
          <div onClick={() => this.showModal(8)} className="project-tile">
            <p>Chuck Norris Jokes</p>
            <img
              src={require("../images/chuckjokes.jpeg")}
              alt="chuck norris jokes"
            />
          </div>

          <div onClick={() => this.showModal(7)} className="project-tile">
            <p>Survey Form</p>
            <img src={require("../images/surveyform.jpeg")} alt="survey form" />
          </div>
          <div onClick={() => this.showModal(6)} className="project-tile">
            <p>Landing Page</p>
            <img
              src={require("../images/landing-page.jpeg")}
              alt="landing page"
            />
          </div>
          <div onClick={() => this.showModal(5)} className="project-tile">
            <p>Tribute Page</p>
            <img
              src={require("../images/tribute-page.jpeg")}
              alt="tribute page"
            />
          </div>
          <div onClick={() => this.showModal(4)} className="project-tile">
            <p>Quote Finder</p>
            <img
              src={require("../images/quotefinder.jpeg")}
              alt="quote finder"
            />
          </div>
          <div onClick={() => this.showModal(3)} className="project-tile">
            <p>Markdown Previewer</p>
            <img
              src={require("../images/markdown.jpeg")}
              alt="markdown previewer"
            />
          </div>
          <div onClick={() => this.showModal(2)} className="project-tile">
            <p>Calculator</p>
            <img src={require("../images/calculator.jpeg")} alt="calculator" />
          </div>
          <div onClick={() => this.showModal(1)} className="project-tile">
            <p>Drum Machine</p>
            <img
              src={require("../images/drum-machine.jpeg")}
              alt="drum machine"
            />
          </div>
        </div>
        {this.state.show ? (
          <Modal hideModal={this.hideModal} imgnum={this.state.imgnum} />
        ) : null}
      </div>
    );
  }
}

export default Projects;
