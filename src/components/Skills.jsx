import React from "react";
import { Element } from "react-scroll";
import Typed from "react-typed";

const Skills = () => {
  return (
    <div>
      <Element name="skills"></Element>
      <div className="w-full py-6 font-josefin">
        <div className="max-w-[1920px] w-9/12 h-screen mx-auto text-left pr-10 flex items-center">
          <div className="grid">
            <div className="flex flex-col justify-start pl-6">
              <h6 className="text-[#c40233] pb-4">What I Do</h6>
              <p className="text-white font-bold md:text-3xl sm:text-2xl text-xl pb-10">
                I am a self-tought developer. With primary focus being on
                backed. <br/>But I also extend my knowledge in fornt end department.
              </p>

              <p className="text-white font-bold md:text-3xl sm:text-2xl text-xl pb-10">
                Having industrial experience as an automation tester, I also
                have hand-on experiene in testing.
              </p>
              <Typed
                className="text-white font-bold md:text-3xl sm:text-2xl text-xl"
                strings={["A complete package to hire ;)"]}
                typeSpeed={120}
                backSpeed={ 200 }
                loop
              />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
