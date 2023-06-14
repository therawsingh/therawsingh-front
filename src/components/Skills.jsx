import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import Typed from "react-typed";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () =>
{
  
    useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);

  return (
    <div>
      <Element name="skills"></Element>
      <div className="w-full py-6 font-josefin">
        <div className="max-w-[1920px] w-9/12 h-screen mx-auto text-left pr-10 flex items-center">
          <div className="grid">
            <div className="flex flex-col justify-start pl-6">
              <h6 className="text-[#ee2400] pb-4 text-sm sm:text-xl">
                What I Do
              </h6>
              <p className="text-white md:text-3xl sm:text-2xl text-xl pb-10">
                I am a self-tought{" "}
                <span className="text-[#ee2400]" data-aos="fade-right">
                  backend developer
                </span>
                . Learning Java, Spring, Spring Boot, Hibernate, SQL. <br />I
                also am expanding my knowledge in ReactJS, HTML, CSS, JavaScript
                for{" "}
                <span className="text-[#ee2400]" data-aos="fade-right">
                  frontend.
                </span>
              </p>

              <p className="text-white md:text-3xl sm:text-2xl text-xl pb-10">
                Having industrial experience as an{" "}
                <span className="text-[#ee2400]" data-aos="fade-right">
                  automation tester
                </span>
                , I also have hands-on experiene in QA testing.
              </p>
              <div data-aos="fade-right">
                <Typed
                  className="text-white font-bold md:text-3xl sm:text-2xl text-xl"
                  strings={["A complete package ;)"]}
                  typeSpeed={120}
                  backSpeed={200}
                  loop
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
