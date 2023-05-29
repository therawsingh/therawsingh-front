import React from "react";
import { Element } from "react-scroll";
import SkillsBar from "./SkillsBar";

const Skills = () => {
  return (
    <div>
      <Element name="skills"></Element>
      <div className="text-white">
        <div className="max-w-[1240px] mx-auto md:grid sm:grid grid">
          <div>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold pt-6 sm:px-8 px-6 text-[#f26860] text-center sm:text-left">
              Skills
            </h1>
            <div className="md:text-3xl sm:text-2xl text-xl font-bold sm:px-8 px-6 text-center sm:text-left">
              <div>
                <SkillsBar />
              </div>
            </div>
            <div>
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
