import React, { useState, useEffect } from "react";
import Selfie from "../assets/Selfie.jpg";
import { Element } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const Me = () =>
{
  
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Element name="aboutMe"></Element>

      <div className="w-full py-10 font-josefin">
        <div className="max-w-[1920px] w-9/12 h-screen mx-auto text-left pr-10 flex items-center">
          <div className="grid sm:grid-cols-2">
            <div className="flex flex-col justify-start pl-6">
              <p
                className="text-white font-bold md:text-3xl sm:text-2xl text-2xl pb-10"
              >
                A <span className="text-[#c40233]">tech enthusiast</span> who
                lives around tech and{" "}
                <span className="text-[#c40233]">loves</span> to learn new
                things
                <br />
                about tech.
              </p>

              <p className="text-white font-bold md:text-3xl sm:text-2xl text-2xl pb-10">
                An <span className="text-[#c40233]">avid gamer</span> who loves
                gaming.
              </p>

              <p className="text-white font-bold md:text-3xl sm:text-2xl text-2xl pb-10">
                But not as much as{" "}
                <span className="text-[#c40233]">I love coding.</span> Learning
                new languages and frameworks is my favourite passtime.
              </p>

              <p className="text-white font-bold md:text-3xl sm:text-2xl text-2xl">
                <span className="text-[#c40233]">Challenges</span> intrigue me
                more than my <span className="text-[#c40233]">coffee. </span>
                Neither being expendable for me though.
              </p>
            </div>
            <div className="flex justify-center sm:justify-start md:justify-end items-start">
              <img
                src={Selfie}
                alt="Me"
                className="w-[300px] rounded-full shadow-xl sticky top-0 sm:w-[200px] md:w-[300px] lg:w-[400px] py-4"
                data-aos="fade-up"
                data-aos-duration="2000"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Me;
