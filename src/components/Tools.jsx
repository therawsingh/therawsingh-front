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
    AOS.init({});
  }, []);

  return (
    <div className="text-white font-josefin max-w-[1920px] sm:mt-[-80px] mt-[-30px] w-9/12 h-screen mx-auto pl-8">
      <Element name="top"></Element>
      <h6 className="text-[#ee2400] pb-4 text-sm sm:text-xl">Tools</h6>
      <p className="pb-10 md:text-3xl sm:text-2xl text-xl">
        A set of tools created in the backend using <br /> Java Spring Boot,
        Spring Rest, and Hibernate.
      </p>
      <div className="grid justify-center items-center md:grid-cols-3 gap-8">
        <div className="w-full" data-aos="fade-right" data-aos-duration="800">
          <Currency />
        </div>
        <div className="w-full" data-aos="fade-right" data-aos-duration="800">
          <WeatherCard />
        </div>
        <div className="w-full" data-aos="fade-right" data-aos-duration="800">
          <UrlShortener />
        </div>
        <div className="w-full" data-aos="fade-right" data-aos-duration="800">
          <ComingsoonCard />
        </div>
      </div>
    </div>
  );
};

export default Tools;
