import React, { Component } from "react";
import BarGraphSkills from "./BarGraphSkills";

class Skills extends Component {
  render() {
  return (
    <div id="skills" className="min-h-screen flex-col text-center">
      <div className="text-5xl font-bold py-8" data-aos={"slide-down"}>
        Skills
      </div>
        <div className="flex flex-col text-center" data-aos="slide-up">
          <div className="ml-16 flex flex-col gap-8 mt-6">
            <BarGraphSkills name={"HTML/CSS"} percent={85} />
            <BarGraphSkills name={"MySQL"} percent={75} />
            <BarGraphSkills name={"PHP"} percent={75} />
            <BarGraphSkills name={"Kotlin"} percent={40} />
            <BarGraphSkills name={"Javascript"} percent={80} />
            <BarGraphSkills name={"React JS"} percent={80} />
          </div>
        </div>
      </div>
  );
}
}

export default Skills;
