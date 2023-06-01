import React, { useState } from "react";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="flex justify-end text-white font-josefin sticky top-0 p-8 pt-4">
      <ul className="py-10 justify-end flex flex-col sm:text-xl text-xs text-right">
        <li className="pb-4 hover:cursor-pointer hover:text-[#c40233]">
          <LinkS to="aboutMe" smooth={true} duration={500}>
            ME
          </LinkS>
        </li>
        <li className="pb-4 hover:cursor-pointer hover:text-[#c40233]">
          <LinkS to="skills" smooth={true} duration={500}>
            SKILLS
          </LinkS>
        </li>
        <li className="pb-4 hover:cursor-pointer hover:text-[#c40233]">
          <LinkS to="website" smooth={true} duration={500}>
            WEBSITE
          </LinkS>
        </li>
        <li className="pb-4 hover:cursor-pointer hover:text-[#c40233]">
          <LinkS to="experience" smooth={true} duration={500}>
            EXPERIENCE
          </LinkS>
        </li>
        <li className="pb-4 hover:cursor-pointer hover:text-[#c40233]">
          <LinkR to="/tools">TOOLS</LinkR>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
