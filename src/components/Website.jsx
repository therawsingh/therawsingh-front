import React from "react";
import { Element } from "react-scroll";

const Website = () => {
  return (
    <div>
      <Element name="website"></Element>
      <div className="w-full bg-white py-4 px-4">
        <div className="max-w-[1240px] mx-auto md:grid sm:grid grid">
          <div>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-4 sm:py-6 md:py-10 sm:px-8 px-6 text-[#f26860] text-center sm:text-right">
              About this Website
            </h1>
            <p className="text-justify md:text-2xl sm:text-xl text-l sm:px-8 px-6">
              I am a slef-tought developer who learned Java Spring Boot developemnt and
              ReactJS development from scratch. And implemented the learned knowledge to build this website.
              This a responsive website created with ReactJS using its component
              based architecture, to render HTML. Styled with TailwindCSS and
              basic CSS. And on the backend side (work in progress) I have used
              Java as the primary language, Spring Boot for initializing the
              website, Spring Rest to create the end points, Hibernate for ORM,
              Spring Data JPA and SQL for database.
            </p>
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
                  <li className="sm:pb-6">Spring Data JPA</li>
                </div>
                <div className="flex-auto">
                  <li className="py-0">Spring HIbernate</li>
                  <li className="py-0">SQL</li>
                  <li className="py-0">ReactJS</li>
                  <li className="py-0">TailwindCSS</li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Website;
