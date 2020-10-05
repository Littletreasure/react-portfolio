import React from "react";
import email from "../images/Email.png";

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <div className="contactInfo">
        <p>If you would like to contact me, please send me an email.</p>
        <a href="mailto:ruth_sargent@yahoo.co.uk">
          <img id="emaillogo" src={email} alt="email" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
