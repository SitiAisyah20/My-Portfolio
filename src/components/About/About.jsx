import React, { Component } from "react";
import "../../App.css";
import LearningCode from "../../assets/images/aboutme.jpg";

class About extends Component {
  render() {
    return (
      <div
        id="about"
        className="min-h-screen flex flex-col text-center gap-5 text-white text-lg  font-normal"
      >
        <div className="head text-5xl mt-12 font-bold" data-aos={"slide-down"}>
          About Me
        </div>
        <div className="flex flex-row  gap-6 ml-8">
          <div className="flex-col mt-14 flex flex-auto w-64 gap-6">
            <h3 className="text-3xl font-medium" data-aos={"fade-left"}>
              I'm <span className="text-yellow-600">Siti Aisyah,</span> a
              Frontend Developer
            </h3>
            <p
              className="pt-5 leading-7 text-white text-slate-900 text-justify"
              data-aos={"fade-left"}
            >
              Skilled and passionate Frontend developer looking to leverage to
              contribute to the development of web applications. Extensive
              knowledge of HTML, CSS, and JavaScript. Experienced in building
              and deploying frontend applications with React. S
            </p>
            <p
              className="text-justify leading-7 text-white text-slate-900"
              data-aos={"fade-right"}
            >
              Seeking an entry-level position as a Frontend Developer to
              leverage my knowledge and skills to create dynamic user
              experiences. Dedicated to delivering high-quality results in a
              deadline-driven environment and able to collaborate with the team.
              Ambitious and eager to learn new technologies and techniques and
              contribute to the success of the organization.
            </p>
          </div>

          <div
            class="relative flex-auto w-32   sm:rounded-lg  pl-4"
            data-aos={"slide-left"}
          >
            <img
              src={LearningCode}
              alt="Learning Code"
              className="motion-safe:animate-zoomy"
            />
            <div className="motion-safe:animate-zoomy">
              <lottie-player
                autoplay
                loop
                mode="bounce"
                src="https://assets10.lottiefiles.com/packages/lf20_w98qte06.json"
                style={{ width: "350px" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
