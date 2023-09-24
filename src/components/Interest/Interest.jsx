import React, { Component } from "react";
import Card from "./Card";
import { interestData } from "../data/data";
import Title from "../../Layout/Title";

class Interest extends Component {
  render() {
    return (
      <div id="interest" className="min-h-screen flex-col text-center">
        <div className="text-5xl py-8 font-bold" data-aos={"slide-down"}>
          Interest
        </div>
        <Title />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          {interestData.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Interest;
