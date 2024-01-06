import React, { Component } from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiHtml5,
  DiCss3Full,
  DiMysql,
  DiBootstrap,
  DiCodeigniter,
} from "react-icons/di";
import { FaGithub, FaPhp, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiRedux } from "react-icons/si";
class Skills extends Component {
  render() {
    return (
      <div id="skills" className=" flex-col text-center">
        <div className="text-5xl font-bold py-8" data-aos={"slide-down"}>
          Skills
        </div>
        <div className="flex flex-col text-center" data-aos="slide-up">
          <div className="flex flex-col gap-8 mt-6">
            {/* First Row */}
            <div className="flex justify-center pb-10">
              <div className="w-20 md:w-24 mx-2 border-2 p-4">
                <CgCPlusPlus
                  className="w-full h-auto"
                  style={{ color: "#00599c" }}
                />
                <span className="font-bold text-sm">C++</span>
              </div>
              <div className="w-20 md:w-24 mx-2 border-2 p-4">
                <DiHtml5
                  className="w-full h-auto"
                  style={{ color: "#e44d26" }}
                />
                <span className="font-bold text-sm">HTML</span>
              </div>
              <div className="w-20 md:w-24 mx-2 border-2 p-4">
                <DiCss3Full
                  className="w-full h-auto"
                  style={{ color: "#00599c" }}
                />
                <span className="font-bold text-sm">CSS</span>
              </div>
              <div className="w-20 md:w-24 mx-2 border-2 p-4">
                <DiJavascript1
                  className="w-full h-auto"
                  style={{ color: "#f0db4f" }}
                />
                <span className="font-bold text-sm">JavaScript</span>
              </div>
              <div className="w-20 md:w-24 mx-2 border-2 p-4">
                <FaPhp className="w-full h-auto" style={{ color: "#8892bf" }} />
                <span className="font-bold text-sm">PHP</span>
              </div>
              <div className="w-20 md:w-24 mx-2 border-2 p-4">
                <FaReact
                  className="w-full h-auto"
                  style={{ color: "#61dafb" }}
                />
                <span className="font-bold text-sm">React</span>
              </div>
            </div>
            {/* Second Row */}
            <div className="flex justify-center pb-10">
              <div className="w-20 md:w-24 mx-2 border-2 p-4">
                <DiBootstrap
                  className="w-full h-auto"
                  style={{ color: "#7952b3" }}
                />
                <span className="font-bold text-sm">Bootstrap</span>
              </div>
              <div className="w-20 md:w-24 mx-2 border-2 p-4">
                <SiTailwindcss
                  className="w-full h-auto"
                  style={{ color: "#38b2ac" }}
                />
                <span className="font-bold text-sm">Tailwind CSS</span>
              </div>
              <div className="w-20 md:w-24 mx-2 border-2 p-4">
                <SiRedux
                  className="w-full h-auto"
                  style={{ color: "#764abc" }}
                />
                <span className="font-bold text-sm">React Redux</span>
              </div>
              <div className="w-20 md:w-24 mx-2 border-2 p-2">
                <DiCodeigniter
                  className="w-full h-auto"
                  style={{ color: "#dd4814" }}
                />
                <span className="font-bold text-sm">CodeIgniter</span>
              </div>
              <div className="w-20 md:w-24 mx-2 border-2 p-4">
                <DiMysql
                  className="w-full h-auto"
                  style={{ color: "#4479a1" }}
                />
                <span className="font-bold text-sm">MySQL</span>
              </div>
              <div className="w-20 md:w-24 mx-2 border-2 p-4">
                <FaGithub className="w-full h-auto" />
                <span className="font-bold text-sm">Github</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
