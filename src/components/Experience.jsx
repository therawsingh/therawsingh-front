import React from "react";
import { Element } from "react-scroll";

const Experience = () => {
  return (
    <div>
      <Element name="experience"></Element>
      <div className="text-white">
        <div className="max-w-[1240px] mb-[50px] w-full mx-auto md:grid sm:grid grid">
          <div>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-4 sm:py-6 md:py-10 sm:px-8 px-6 text-[#c40233] text-center sm:text-left">
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
          <div>
            <h2 className="md:text-3xl sm:text-2xl text-xl font-bold sm:px-8 px-6 text-center sm:text-right">
              Infosys (Jan '22 - Jul '22)
            </h2>
            <ul className="py-6 list-disc px-12 sm:text-lg md:text-xl text-justify">
              <li className="py-2">
                At Infosys I worked on three different projects, all of them
                being Agile-based. I had the role of an Automation Tester in all
                three.
              </li>
              <li className="py-2">
                As an automation tester, I had to analyze requirements, think of
                logic for automation, and then develop a working code. using the
                developed piece of code, carrying out tests on the application,
                and reporting observations.
              </li>
              <li className="py-2">
                Demoing the developed code and test results to the client and
                team members. And implementing any suggested changes.
              </li>
              <li className="py-2">
                Co-Developed a framework for an application for one of the
                projects, along with my teammates. Opted for a Hybrid framework
                (Data-driven as well as Keyword-driven). Automated the core
                functionalities of the application, which took test data from
                Excel sheets, and the flow of methods to be executed was decided
                from Excel sheets as well. These automated functionalities would
                later be used to develop complex functional flows. Formulated an
                apt design for the Datasheet and Keyword sheet (sheets that will
                be used to trigger different test methods and will be the source
                of data for the tests).
              </li>
              <li className="py-2">
                Solely created a tool that was used to raise accesses for
                newcomers. The tool used Java Swing for the UI, Java for logic,
                and Selenium for automation. It fetched data from Excel sheets
                and automated the process of raising access for a user from
                various portals.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
