import React, { useState, useEffect } from "react";
import Selfie from "../assets/Selfie.jpg";
import { Element } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import "../style/otherstyles.css";

const Me = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Element name="aboutMe"></Element>

      <div className="w-full py-6 font-josefin">
        <div className="max-w-[1920px] w-9/12 h-screen mx-auto text-left pr-10 flex items-center">
          <div className="grid sm:grid-cols-2">
            <div className="flex flex-col justify-start pl-6">
              <h6
                className="text-[#ee2400] pb-4 text-sm sm:text-xl"
                data-aos="fade-in"
                data-aos-duration="6000"
              >
                About Me
              </h6>
              <p
                className="text-white md:text-3xl sm:text-2xl text-xl pb-10"
                data-aos="fade-in"
                data-aos-duration="6000"
              >
                I am a <span className="text-[#ee2400]">tech enthusiast</span> who
                loves being surrounded by tech and{" "}
                <span className="text-[#ee2400]">loves</span> to learn new
                things
                <br />
                about tech.
              </p>

              <p
                className="text-white md:text-3xl sm:text-2xl text-xl pb-10"
                data-aos="fade-in"
                data-aos-duration="6000"
              >
                A <span className="text-[#ee2400]">hardcore gamer</span> with deep love for gaming.
              </p>

              <p
                className="text-white md:text-3xl sm:text-2xl text-xl pb-10"
                data-aos="fade-in"
                data-aos-duration="6000"
              >
                But not as much as{" "}
                <span className="text-[#ee2400]">I love coding.</span> Learning
                new languages and frameworks is my favourite pass-time.
              </p>

              <p
                className="text-white md:text-3xl sm:text-2xl text-xl"
                data-aos="fade-in"
                data-aos-duration="4000"
              >
                <span className="text-[#ee2400]">Challenges</span> intrigue him
                more than my <span className="text-[#ee2400]">coffee. </span>
                Neither being expendable for me though.
              </p>
            </div>
            <div className="flex justify-center sm:justify-start md:justify-end items-start">
              <img
                src={Selfie}
                alt="Me"
                className="w-[150px] rounded-full shadow-xl sm:w-[200px] md:w-[300px] lg:w-[400px] py-4 sticky top-0"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Me;
