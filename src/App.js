import React from "react";
import { Router } from "@reach/router";
import "./css/styles.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Project from "./Components/Project";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Router>
          <Home path="/" />
          <About path="/about" />
          <Projects path="/projects" />
          <Contact path="/contact" />
          <Project path="/project/:id" />
        </Router>
      </div>
    </div>
  );
}

export default App;
