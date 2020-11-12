import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { Link } from "@reach/router";
import "../css/styles.css";
import projects from "../data/proj_data";

class Project extends Component {
  state = {
    title: "",
    image: "",
    description: "",
    github: "",
  };
  componentDidMount() {
    const { id } = this.props;
    const project = projects.filter((item) => item.id == id);
    this.setState({
      title: project[0].title,
      image: project[0].image,
      description: project[0].description,
      github: project[0].github,
    });
  }
  render() {
    const { title, image, description, github } = this.state;
    return (
      <div className="project">
        <h2>{title}</h2>
        <img src={image} alt={title} />
        {description}
        <div className="footer">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="icon" icon={faGithub} /> GitHub
          </a>
          <Link className="link" to="/projects">
            <FontAwesomeIcon className="icon" icon={faArrowAltCircleLeft} />{" "}
            Back
          </Link>
        </div>
      </div>
    );
  }
}

export default Project;
