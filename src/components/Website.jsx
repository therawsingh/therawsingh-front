import React from "react";
import { Element } from "react-scroll";

const Website = () => {
  return (
    <div>
      <Element name="website"></Element>
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <div>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-4 sm:py-6 md:py-10 sm:px-8 px-6 text-[#f26860] text-center sm:text-right">
              About this Website
            </h1>
            <h3 className="md:text-2xl sm:text-xl text-xl font-bold pt-4 sm:pt-4 md:pt-6 sm:px-8 px-6 text-black text-center sm:text-left">
              List of technologies used
            </h3>
            <ul className="list-disc px-12 sm:text-lg md:text-xl text-justify">
              <div className="flex">
                <div className="flex-auto">
                  <li className="pt-2">Java</li>
                  <li className="py-0">Spring</li>
                  <li className="py-0">Spring Boot</li>
                  <li className="py-0">Spring Rest</li>
                  <li className="sm:pb-6 pb-6">Spring Data JPA</li>
                </div>
                <div className="flex-auto">
                  <li className="py-0">Spring HIbernate</li>
                  <li className="py-0">SQL</li>
                  <li className="py-0">ReactJS</li>
                  <li className="py-0">TailwindCSS</li>
                </div>
              </div>
            </ul>
            <p className="text-justify md:text-2xl sm:text-xl text-l sm:px-8 px-6">
              I am a self-taught developer who acquired expertise in Java Spring
              Boot development and ReactJS from scratch. I have applied this
              knowledge to construct the present website. The website is
              designed to be responsive and has been built using ReactJS,
              leveraging its component-based architecture for efficient HTML
              rendering. The user interface has been styled using TailwindCSS
              and basic CSS. On the backend side, I am currently in the process
              of implementing Java as the primary language, Spring Boot for
              website initialization, Spring Rest for creating endpoints,
              Hibernate for ORM, and Spring Data JPA along with SQL for database
              management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Website;
