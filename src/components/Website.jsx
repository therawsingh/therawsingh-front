import React from "react";
import { Element } from "react-scroll";

const Website = () => {
  return (
    <div>
      <Element name="website"></Element>
      <div className="w-full bg-white py-4 px-4">
        <div className="max-w-[1240px] mx-auto md:grid sm:grid grid">
          <div>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-4 sm:py-6 md:py-10 sm:px-8 px-6 text-[#c31f42] text-center sm:text-right">
              About this Website
            </h1>
            <h2 className="md:text-3xl sm:text-2xl text-xl font-bold sm:px-8 px-6 text-center sm:text-left">
              Backend :
            </h2>
            <ul className="py-6 list-disc px-12 sm:text-lg md:text-xl text-justify">
              <li className="py-2">Tech Used</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Website;
