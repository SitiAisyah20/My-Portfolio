import React, { Component } from "react";
import "../App.css";
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects";
import Experience from "./Experience/Experience";
import Skills from "./Skills/Skills";
import Interest from "./Interest/Interest";
import Awards from "./Awards/Awards";

class Display extends Component {
  render() {
    return (
      <div className="pl-[25%] w-screen back text-white">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Interest />
        <Awards />
        <Projects />
      </div>
    );
  }
}

export default Display;
