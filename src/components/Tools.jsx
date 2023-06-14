import React, { useState, useEffect } from "react";
import Typed from "react-typed";
import { Element } from "react-scroll";
import Currency from "../components/CurrencyCard";
import AOS from "aos";
import "aos/dist/aos.css";
import WeatherCard from "./WeatherCard";
import UrlShortener from "./UrlShortener";
import TimezoneCard from "./TimezoneCard";
import ComingsoonCard from "./ComingsoonCard";

const Tools = () => {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);

  return (
    <div className="text-white font-josefin max-w-[1920px] sm:mt-[-80px] mt-[-30px] w-9/12 h-screen mx-auto pl-8">
      <Element name="top"></Element>
      <h6
        className="text-[#ee2400] pb-4 text-sm sm:text-xl"
        data-aos="fade-right"
      >
        Tools
      </h6>
      <p
        className="pb-10 md:text-3xl sm:text-2xl text-xl"
        data-aos="fade-right"
      >
        A set of tools created in the backend using <br /> Java Spring Boot,
        Spring Rest, and Hibernate.
      </p>
      <div className="grid justify-center items-center md:grid-cols-3 gap-8">
        <div className="w-full">
          <Currency />
        </div>
        <div className="w-full">
          <WeatherCard />
        </div>
        <div className="w-full">
          <UrlShortener />
        </div>
        <div className="w-full">
          <ComingsoonCard />
        </div>
      </div>
    </div>
  );
};

export default Tools;
