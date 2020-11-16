import React from "react";

const projects = [
  {
    id: 12,
    title: "Animal Crossing",
    image: require("../images/ac_screen.jpeg"),
    description: (
      <p>
        After playing the Animal Crossing game during lockdown, I decided I
        wanted to start a new React project based around this. I found an api
        for the game online and used this in my site. It is still a work in
        progress, but is proving to be a great project to practise my skills on.
        I used TDD for the api and utility functions. The information for the
        api I am using is available{" "}
        <a
          href="https://github.com/alexislours/ACNHAPI"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
    ),
    github: "https://github.com/Littletreasure/AC_Web",
  },
  {
    id: 11,
    title: "Manchestar App",
    image: require("../images/manchestar.png"),
    description: (
      <p>
        This was the final project for the Northcoders Bootcamp. As a team we
        created an app to guide people around Manchester on a tour of music
        venues. We used Viro React and React Native to create the app and the AR
        content. I used Blender 2.80 to create some of the 3d content for the AR
        functionality and I created a modal popup for the venue information. The
        backend was created by another student using Go. We had daily standups
        to share progress and assign tasks and used a kanban board to see our
        progress.
      </p>
    ),
    github: "https://github.com/Luke9090/proj-ar-tour",
  },
  {
    id: 10,
    title: "NC News",
    image: require("../images/ncnews.jpeg"),
    description: (
      <p>
        I started this project in the backend phase of the course. It is a
        social news aggregation, web content rating, and discussion website. I
        created the database using PSQL and interacted with it using knex. I
        created various endpoints and tested these using Insomnia. The code was
        also tested using Mocha and Chai. The backend data is hosted on{" "}
        <a
          href="https://ruths-nc-news.herokuapp.com/api/"
          target="_blank"
          rel="noopener noreferrer"
        >
          heroku
        </a>{" "}
        and the frontend is hosted on{" "}
        <a
          href="https://ruth-nc-news.netlify.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          netlify
        </a>
        . I built the frontend using React and CSS. Both repositories are held
        on GitHub.
      </p>
    ),
    github: "https://github.com/Littletreasure/nc-news",
  },
  {
    id: 9,
    title: "Noughts & Crosses",
    image: require("../images/ncgame.jpeg"),
    description: (
      <p>
        This was a pair programming project during my time at Northcoders. The
        task was to create a game using React.
      </p>
    ),
    github: "https://github.com/Littletreasure/fe-react-app",
  },
  {
    id: 8,
    title: "Chuck Norris Jokes",
    image: require("../images/chuckjokes.jpeg"),
    description: (
      <p>
        This was an app created as part of a tech test. The task was to create a
        site to access the Chuck Norris joke{" "}
        <a
          href="http://www.icndb.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          api
        </a>
        . It had to have the option to change the name used in the joke and also
        to have a never ending joke list. I used React and CSS.
      </p>
    ),
    github: "https://github.com/Littletreasure/chuck_test_fe",
  },
  {
    id: 7,
    title: "Survey Form",
    image: require("../images/surveyform.jpeg"),
    description: (
      <p>
        This is a project completed as part of the freeCodeCamp Responsive Web
        Design Certification. The task was to create a survey form with the
        following elements - name, email address, number, dropdown box, radio
        buttons, checkboxes and comment box. Each element should have
        placeholder text. I created it using HTML and CSS. I created the
        original version in{" "}
        <a
          href="https://codepen.io/littletreasure/pen/VwayVmP"
          target="_blank"
          rel="noopener noreferrer"
        >
          CodePen
        </a>
        .
      </p>
    ),
    github: "https://github.com/Littletreasure/survey-form",
  },
  {
    id: 6,
    title: "Landing Page",
    image: require("../images/landing-page.jpeg"),
    description: (
      <p>
        This is a project completed as part of the freeCodeCamp Responsive Web
        Design Certification. The task was to create a product landing page. It
        should have a nav bar which navigates to different sections of the page.
        It should also have an embedded video and a form element. I created it
        using HTML and CSS. I created the original version in{" "}
        <a
          href="https://codepen.io/littletreasure/pen/xxVYdpM"
          target="_blank"
          rel="noopener noreferrer"
        >
          CodePen
        </a>
        .
      </p>
    ),
    github: "https://github.com/Littletreasure/landing-page",
  },
  {
    id: 5,
    title: "Tribute Page",
    image: require("../images/tribute-page.jpeg"),
    description: (
      <p>
        This is a project completed as part of the freeCodeCamp Responsive Web
        Design Certification. The task was to create a tribute page which
        contains a picture and caption, tribute information and a link to an
        external site. I created it using HTMl and CSS. I created the original
        version in{" "}
        <a
          href="https://codepen.io/littletreasure/pen/gOrGWoo"
          target="_blank"
          rel="noopener noreferrer"
        >
          CodePen
        </a>
        .
      </p>
    ),
    github: "https://github.com/Littletreasure/tribute-page",
  },
  {
    id: 4,
    title: "Quote Finder",
    image: require("../images/quotefinder.jpeg"),
    description: (
      <p>
        This is a project I completed as part of the freeCodeCamp Front End
        Libraries Certification. The main requirements were to build an app that
        had a button to request a new random quote. It should show the author of
        the quote and should have a button to tweet the quote. I created the
        original version in{" "}
        <a
          href="https://codepen.io/littletreasure/pen/WNwNMzG"
          target="_blank"
          rel="noopener noreferrer"
        >
          CodePen
        </a>
        . I created a slightly updated version in gitHub which uses jQuery to
        fade a new colour in when a new quote is requested. I also used React
        and SCSS.
      </p>
    ),
    github: "https://github.com/Littletreasure/quote_finder",
  },
  {
    id: 3,
    title: "Markdown Previewer",
    image: require("../images/markdown.jpeg"),
    description: (
      <p>
        This is a project I completed as part of the freeCodeCamp Front End
        Libraries Certification. I created the original version in{" "}
        <a
          href="https://codepen.io/littletreasure/pen/KKzVvVX"
          target="_blank"
          rel="noopener noreferrer"
        >
          CodePen
        </a>
        . I used React and SCSS.
      </p>
    ),
    github: "https://github.com/Littletreasure/markdown-viewer",
  },
  {
    id: 2,
    title: "Calculator",
    image: require("../images/calculator.jpeg"),
    description: (
      <p>
        This is a project I completed as part of the freeCodeCamp Front End
        Libraries Certification. I created the original version in{" "}
        <a
          href="https://codepen.io/littletreasure/pen/OJNRYLV"
          target="_blank"
          rel="noopener noreferrer"
        >
          CodePen
        </a>
        . There were 15 tests built in to the pen, including 'no multiple zeros
        at the beginning of the number, only one decimal point in a number,
        input should be visible in the display'. I used React and SCSS.
      </p>
    ),
    github: "https://github.com/Littletreasure/Calculator",
  },
  {
    id: 1,
    title: "Drum Machine",
    image: require("../images/drum-machine.jpeg"),
    description: (
      <p>
        This is a project I completed as part of the freeCodeCamp Front End
        Libraries Certification. I created the original version in{" "}
        <a
          href="https://codepen.io/littletreasure/pen/eYZZOvw"
          target="_blank"
          rel="noopener noreferrer"
        >
          CodePen
        </a>
        . The main requirements were to build a drum machine with 9 pads,
        labelled Q, W, E, A, S, D, Z, X, C. Each pad should trigger a unique
        audio clip when clicked with a mouse or when the corresponding key on
        the keyboard is pressed. The name of the audio clip should be shown in
        the app. I created a more advanced version for gitHub which also has
        power on and off, volume control and a choice of 2 sound banks. I used
        React and SCSS.
      </p>
    ),
    github: "https://github.com/Littletreasure/drum-machine",
  },
];
export default projects;
