import React from "react";
import codecademy from "../images/codecademy.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faInstagram,
  faGithub,
  faFreeCodeCamp,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <div className="contactLinks">
        <div className="links">
          <h3>If you would like to contact me, please send me an email.</h3>

          <a className="link" href="mailto:ruth_sargent@yahoo.co.uk">
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
            <p>Email</p>
          </a>
        </div>
        <div className="links">
          <h3>To see my coding journey click the following links.</h3>

          <a
            className="link"
            href="https://github.com/Littletreasure"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faGithub} />
            <p>GitHub</p>
          </a>
          <a
            className="link"
            href="https://www.freecodecamp.org/littletreasure"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faFreeCodeCamp} />
            <p>freeCodeCamp</p>
          </a>
          <a
            className="link"
            href="https://www.codecademy.com/profiles/Littletreasure"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon" src={codecademy} alt="codecademy logo" />
            <p>Codecademy</p>
          </a>
        </div>
        <div className="links">
          <h3>If you are interested in my running journey ...</h3>

          <a
            className="link"
            href="https://www.instagram.com/ruth_littletreasure/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faInstagram} />
            <p>Instagram</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
