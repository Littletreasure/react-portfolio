import React from "react";
import { Router } from "@reach/router";
import "./css/styles.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

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
        </Router>
      </div>
    </div>
  );
}

export default App;
