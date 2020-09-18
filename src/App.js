import React from "react";
import { Router } from "@reach/router";
import "./css/styles.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Projects path="/projects" />
      </Router>
    </div>
  );
}

export default App;
