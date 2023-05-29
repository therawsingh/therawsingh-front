import React from 'react'
import Selfie from '../assets/Selfie.jpg'
import { Element } from "react-scroll";

const Me = () => {
  return (
    <div>
      <Element name="aboutMe"></Element>
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img
            src={Selfie}
            alt="Me"
            className="w-[400px] my-15 rounded-full shadow-xl md:mx-0 sm:mx-0 mx-auto inline-block align-middle"
          ></img>
          <div className="flex flex-col justify-center">
            <h1 className="text-[#f26860] font-bold md:text-4xl sm:text-3xl text-2xl py-6 md:text-left text-center sm:px-4 px-2">
              About Me
            </h1>
            <p className="text-justify sm:px-4 md:text-2xl sm:text-xl text-xl font-medium">
              Tech enthusiast, whose primary goal is to gain knowledge. Coding
              being my second love (after Gaming), is a field in which I want to
              excel. Learning new languages, frameworks is what I like to do in
              my past time. I wish to, someday, develop something that will be
              recognized worldwide. I prefer being self-taught over learning
              from classes. Challenges intrigue me more than my coffee (neither
              being expendable for me).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Me