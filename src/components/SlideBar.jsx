import React, { Component } from "react";
import "../App.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Telegram } from "@mui/icons-material";

class Slidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: 0,
    };
  }

  handleSelect = (index) => {
    this.setState({ select: index });
  };

  render() {
    const { select } = this.state;

    return (
      <div className="flex-none bg-black h-screen min-w-[25%] fixed ">
        <div className="nav flex text-white text-lg mt-10 flex-col align-middle justify-center text-center w-full gap-4 overflow-hidden">
          <div data-aos="slide-down">
            <img
              src={require("../assets/images/myprofile.jpg")}
              alt="Siti Aisyah"
              className="rounded-full border-solid cursor-pointer border-[8px] border-stone-600 min-h-fit mx-auto max-w-[190px]"
            />
            <h3 className="text-white name py-2 font-medium ">Siti Aisyah</h3>
          </div>
          <p
            onClick={() => this.handleSelect(0)}
            className={`cursor-pointer hover:text-pink-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
              select === 0 ? "text-pink-600 " : ""
            }`}
            data-aos="slide-right"
            data-aos-delay="200"
          >
            <a href="/#">Home</a>
          </p>
          <p
            onClick={() => this.handleSelect(1)}
            className={`cursor-pointer hover:text-pink-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
              select === 1 ? "text-pink-600 " : ""
            }`}
            data-aos-delay="600"
            data-aos="slide-left"
          >
            <a href="#about"> About Me</a>
          </p>
          <p
            onClick={() => this.handleSelect(2)}
            className={`cursor-pointer hover:text-pink-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
              select === 2 ? "text-pink-600 " : ""
            }`}
            data-aos-delay="1000"
            data-aos="slide-left"
          >
            <a href="#experience"> Experience</a>
          </p>
          <p
            onClick={() => this.handleSelect(3)}
            className={`cursor-pointer hover:text-pink-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
              select === 3 ? "text-pink-600 " : ""
            }`}
            data-aos-delay="1400"
            data-aos="slide-left"
          >
            <a href="#skills"> Skills</a>
          </p>
          {/* <p
            onClick={() => this.handleSelect(4)}
            className={`cursor-pointer hover:text-pink-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
              select === 4 ? "text-pink-600 " : ""
            }`}
            data-aos-delay="1800"
            data-aos="slide-left"
          >
            <a href="#interest"> Interest</a>
          </p> */}
          {/* <p
            onClick={() => this.handleSelect(5)}
            className={`cursor-pointer hover:text-pink-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
              select === 5 ? "text-pink-600 " : ""
            }`}
            data-aos-delay="2200"
            data-aos="slide-left"
          >
            <a href="#awards"> Awards</a>
          </p> */}
          <p
            onClick={() => this.handleSelect(4)}
            className={`cursor-pointer hover:text-pink-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
              select === 4 ? "text-pink-600 " : ""
            }`}
            data-aos="slide-left"
            data-aos-delay="1800"
          >
            <a href="#projects">Projects</a>
          </p>
        </div>
        <div
          className="text-white flex flex-row gap-5 w-fit mx-auto pt-7"
          data-aos="slide-up"
          data-aos-delay="2800"
        >
          <div
            onClick={() =>
              window.open("https://github.com/SitiAisyah20", "_blank")
            }
          >
            <GitHubIcon className="cursor-pointer hover:scale-105" />
          </div>
          <div
            onClick={() =>
              window.open("https://www.instagram.com/aisyahsiti2023", "_blank")
            }
          >
            <InstagramIcon
              className="cursor-pointer hover:scale-105"
              style={{ color: "#bc2a8d" }}
            />
          </div>
          <div
            onClick={() =>
              window.open("https://www.linkedin.com/in/siti-aisyahhh", "_blank")
            }
          >
            <LinkedInIcon
              className="cursor-pointer hover:scale-105"
              style={{ color: "#0077b5" }}
            />
          </div>
          <div
            onClick={() =>
              window.open("https://t.me/telegram/@sitiaisyah_20", "_blank")
            }
          >
            <Telegram
              className="cursor-pointer hover:scale-105"
              style={{ color: "#0088cc" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Slidebar;
