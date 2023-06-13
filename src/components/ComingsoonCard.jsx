"use strict";
import React, { useRef, useState } from "react";
import Typed from "react-typed";

const ComingsoonCard = () => {

  return (
    <div className="relative flex h-96 w-52 lg:h-90 lg:w-80 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-[#080808] to-[#040404] px-8 py-16 shadow-sm shadow-[#ee2400]">
      <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-300" />
      <div className="flex flex-col align-baseline justify-between w-full text-center">
        <Typed
          className="md:text-5xl sm:text-3xl text-xl font-bold text-[#ee2400]"
          strings={["More coming soon!"]}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
      </div>
    </div>
  );
};

export default ComingsoonCard;
