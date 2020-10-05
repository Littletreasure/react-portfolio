import React, { Component } from "react";
import "../css/styles.css";

class Modal extends Component {
  state = {
    images: {
      1: require("../images/ncgame.jpeg"),
      2: require("../images/ncnews.jpeg"),
      3: require("../images/chuckjokes.jpeg"),
      4: require("../images/ac_screen.jpeg"),
      5: require("../images/surveyform.jpeg"),
      6: require("../images/landing-page.jpeg"),
      7: require("../images/tribute-page.jpeg"),
      8: require("../images/quotefinder.jpeg"),
      9: require("../images/markdown.jpeg"),
      10: require("../images/calculator.jpeg"),
      11: require("../images/drum-machine.jpeg"),
    },
    text: {
      1: "This was a noughts and crosses game I created with a fellow student when starting to use React.",
      2: "NC-News was a project created during the backend and frontend sections of the Northcoders training.",
      3: "This is the website for accessing the Chuck Norris joke api. It was created using React.",
      4: "This is my Animal Crossing website. It was created using React.",
      5: "This is a survey form created using html and css. It is based on a freeCodeCamp project.",
      6: "This is a product landing page created using html and css. It is based on a freeCodeCamp project.",
      7: "This is a tribute page created using html and css. It is based on a freeCodeCamp project.",
      8: "This is a freeCodeCamp project to create a quote finder app. It was created using React, SASS and jQuery.",
      9: "This is a freeCodeCamp project to create a markdown viewer. It was created using React and SASS.",
      10: "This is a freeCodeCamp project to create a javascript calculator. It was created using React and SASS.",
      11: "This is a freeCodeCamp project to create a drum machine. It was created using React and SASS.",
    },
    github: {
      1: "https://github.com/Littletreasure/fe-react-app",
      2: "https://github.com/Littletreasure/nc-news",
      3: "https://github.com/Littletreasure/chuck_test_fe",
      4: "https://github.com/Littletreasure/AC_Web",
      5: "https://github.com/Littletreasure/survey-form",
      6: "https://github.com/Littletreasure/landing-page",
      7: "https://github.com/Littletreasure/tribute-page",
      8: "https://github.com/Littletreasure/quote_finder",
      9: "https://github.com/Littletreasure/markdown-viewer",
      10: "https://github.com/Littletreasure/Calculator",
      11: "https://github.com/Littletreasure/drum-machine",
    },
  };
  render() {
    const { imgnum, hideModal } = this.props;
    const { images, text, github } = this.state;
    return (
      <div className="modal">
        <div className="modal-main">
          <img src={images[imgnum]} alt="screenshot" />
          <p>{text[imgnum]}</p>

          <a href={github[imgnum]} target="_blank" rel="noopener noreferrer">
            Github
          </a>

          <button onClick={hideModal}>Close</button>
        </div>
      </div>
    );
  }
}

export default Modal;
