import React, { useEffect } from "react";
import Typed from "react-typed";
import AOS from "aos";
import "aos/dist/aos.css";
import { Element } from "react-scroll";
import "../style/otherstyles.css";

const Landing = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="text-white font-josefin container">
      <Element name="landing"></Element>

      <div className="max-w-[1920px] sm:mt-[-345px] mt-[-290px] w-9/12 h-screen mx-auto text-left flex flex-col justify-center pl-8">
        <p
          className="text-[#c40233] font-bold md:text-5xl sm:text-3xl text-3xl pb-4"
          data-aos="fade-right"
          data-aos-duration="10000000"
        >
          Hello,
        </p>
        <h1
          className="lg:text-7xl md:text-6xl sm:text-4xl text-3xl font-bold pt-6 pb-10"
          data-aos="fade-right"
          data-aos-duration="10000000"
        >
          I am Roshan Singh.
        </h1>
        <div
          className="justify-center items-start"
          data-aos="fade-right"
          data-aos-duration="10000000"
        >
          <Typed
            className="md:text-5xl sm:text-3xl text-3xl font-bold text-[#c40233]"
            strings={["Developer", "Gamer", "Photographer", "Writer"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
