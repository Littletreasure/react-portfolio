import React, { Component } from "react";
import projects from "../data/proj_data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../css/styles.css";

class Modal extends Component {
  state = {
    title: "",
    image: "",
    description: "",
    github: "",
  };
  componentDidMount() {
    const { imgnum } = this.props;
    console.log(imgnum);
    const project = projects.filter((item) => item.id == imgnum);
    this.setState({
      title: project[0].title,
      image: project[0].image,
      description: project[0].description,
      github: project[0].github,
    });
  }
  render() {
    const { hideModal } = this.props;
    const { image, title, description, github } = this.state;
    return (
      <div className="modal">
        <div className="modal-main">
          <h2>{title}</h2>
          <img src={image} alt="screenshot" />
          {description}

          <a
            className="gitLink"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faGithub} /> GitHub
          </a>

          <button onClick={hideModal}>Close</button>
        </div>
      </div>
    );
  }
}

export default Modal;
