import React from "react";
import { Element } from "react-scroll";

const Experience = () => {
  return (
    <div>
      <Element name="experience"></Element>
      <div className="text-white" id="experience">
        <div className="max-w-[1240px] mx-auto md:grid sm:grid grid">
          <div>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-4 sm:py-6 md:py-10 sm:px-8 px-6 text-[#f26860] text-center sm:text-left">
              Experience
            </h1>
            <h2 className="md:text-3xl sm:text-2xl text-xl font-bold sm:px-8 px-6 text-center sm:text-left">
              Capgemini (Jan '22 - Jul '22)
            </h2>
            <ul className="py-6 list-disc px-12 sm:text-lg md:text-xl text-justify">
              <li className="py-2">
                During my time at Capgemini, I worked as an Automation tester in
                an Agile-based project. Taking part in scrum calls, following a
                sprint-based testing and development cycle.
              </li>
              <li className="py-2">
                Being an Automation tester my tasks comprised carrying out a
                requirement analysis of the story in hand to understand the
                piece of application that needs to be automated. Devising a
                logic for automation. And developing a code to implement the
                logic. And ultimately executing the written code to carry out
                the tests and report the observations.
              </li>
              <li className="py-2">
                As the application constantly grows, older automation codes
                start to go obsolete. So my tasks also included analyzing the
                changed requirement of the application, debugging where the old
                automation code (written by someone else) bugs out, and making
                changes to the automation code accordingly.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
