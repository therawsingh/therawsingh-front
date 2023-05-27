import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Landing = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#c31f42] font-bold p-4 md:text-3xl sm:text-2xl text-xl">
          Welcome to therawsingh.
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          I am Roshan Singh
        </h1>
        <div className="flex justify-center items-center">
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#c31f42] py-8"
            strings={["Developer", "Gamer", "Photographer", "Writer"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>

        <Link to="aboutMe" smooth={true} duration={500}>
          <button className="bg-[#c31f42] w-[200px] rounded my-6 mx-auto py-3 text-[#0c0c0c] font-bold">
            About Me
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
