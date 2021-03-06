import React, { Component } from "react";
import "../css/styles.css";
import ruth from "../images/Ruth Sargent (1).jpg";
import ruth1 from "../images/ruth1.JPG";
import ruth2 from "../images/ruth2.jpg";
import ruth4 from "../images/ruth4.jpg";
import ruth6 from "../images/ruth6.JPG";
import frontend from "../images/frontend.jpeg";
import webdesign from "../images/webdesign.jpeg";

class About extends Component {
  render() {
    return (
      <div className="about">
        <h2>About Me</h2>

        <img id="ruth" src={ruth} alt="Me" />

        <div className="aboutText">
          <p>
            Hello, I am Ruth. I was born in Sheffield and moved to Southport
            with my family in 1993.
          </p>
          <p>
            I worked for Sefton Council for 25 years in 3 different roles.
            Firstly as a Technical Clerk in the Environmental Protection
            Department. Secondly as a Data Analyst in the School Organisation
            Section of Children's Services. Thirdly as a Researcher for the
            Early Help and Children's Social Care Teams. Due to cuts within the
            Council, I was made redundant in January 2019. Following a
            conversation with a friend who was attending Northcoders, I made the
            decision to enrol and pursue a new career. Coding is something I had
            always had an interest in. When I was younger, I learnt some BASIC
            and then later on I learnt HTML and CSS. I actually designed the
            first website for my church back in 1998. I enjoy problem solving so
            I am enjoying learning to code and solving coding problems!
          </p>
          <p>
            At Northcoders I learnt Javascript, React, HTML and CSS. We also
            covered Express, node.js and SQL and tested using Chai, Mocha,
            Supertest and Jest. I have since used React Native and SCSS and have
            explored a few other technologies including Python, PHP, jquery,
            Redux and React hooks. I have recently completed the Front End
            Libraries Certification and Responsive Web Design Certification on
            freeCodeCamp and all of the projects can be found on
            <a
              id="codepen"
              href="https://codepen.io/littletreasure"
              target="_blank"
              rel="noopener noreferrer"
            >
              CodePen
            </a>
            and
            <a
              id="github"
              href="https://github.com/Littletreasure"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            . I have recently completed a PHP course on Udemy which covered the
            fundamentals of PHP and have signed up for a second course.
          </p>
        </div>
        <div className="certs">
          <a href={frontend} target="_blank" rel="noopener noreferrer">
            <img src={frontend} alt="frontend certificate" />
          </a>
          <a href={webdesign} target="_blank" rel="noopener noreferrer">
            <img src={webdesign} alt="web design certificate" />
          </a>
        </div>
        <div>
          <p>
            I recently started my first junior developer job at Prestige Worldwide Group in Liverpool. I am now working with Vue js and Nuxt js and I am learning how to work with large websites and how software development works in a business setting. I have also recently worked with Python and Typescript and have just started working with Cloudflare.
          </p>
        </div>
        <div>
          <p>
            In my spare time I enjoy running and I am a member of Southport
            Waterloo Athletics Club. I have completed a couple of half marathons
            and a metric marathon. I regularly attended parkrun before lockdown
            and have volunteered there several times in a few different roles.
          </p>
        </div>
        <div className="pics">
          <img src={ruth1} alt="running pic1" />
          <img src={ruth2} alt="running pic1" />
          <img src={ruth4} alt="running pic1" />
          <img src={ruth6} alt="volunteering pic" />
        </div>

        <div>
          <p>
            I am a member of the Salvation Army Church and I attend the church
            every week. I have recently volunteered in the Church office to
            cover for the administrator.
          </p>

          <p>
            I also enjoy reading, jigsaws, playing computer games and various
            crafts.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
