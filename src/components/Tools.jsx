import React from "react";
import Typed from "react-typed";
import { Element } from "react-scroll";

const Tools = () => {
  return (
    <div className="text-white font-josefin">
      <Element name="top"></Element>
      <div className="max-w-[1920px] sm:mt-[-200px] mt-[-290px] w-9/12 h-screen mx-auto text-left flex flex-col justify-center pl-8">
        <p
          className="text-[#ee2400] font-bold md:text-5xl sm:text-xl text-2xl pb-4"
          data-aos="fade-right"
          data-aos-duration="10000000"
        >
          Hello,
        </p>
        <h1
          className="lg:text-7xl md:text-6xl sm:text-4xl text-xl font-bold pt-6 pb-10"
          data-aos="fade-right"
          data-aos-duration="10000000"
        >
          This is the backend section of the webite with multiple tools.
        </h1>
        <div
          className="justify-center items-start"
          data-aos="fade-right"
          data-aos-duration="10000000"
        >
          <Typed
            className="md:text-5xl sm:text-3xl text-xl font-bold text-[#ee2400]"
            strings={["This page is currently under construction"]}
            typeSpeed={120}
            backSpeed={80}
            loop
          />
        </div>
      </div>
    </div>
  );
};

export default Tools;
