import React, { useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

const Navbar2 = () =>
{
  
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on load
  }, []);
  
  return (
    <div className="flex justify-end text-white font-josefin sticky top-0 sm:p-8 p-2 pt-4">
      <div>
        <ul className="py-10 justify-end flex flex-col sm:text-xl text-xs text-right">
          <li className="pb-4 hover:cursor-pointer hover:text-[#ee2400]">
            <LinkR to="/">
              HOME
            </LinkR>
          </li>
          <li className="pb-4 hover:cursor-pointer hover:text-[#ee2400]">
            <LinkR to="/tools">TOOLS</LinkR>
          </li>
        </ul>
      </div>

      <div className="fixed bottom-4 right-4">
        <LinkS to="top" smooth={true} duration={500}>
          <FaArrowCircleUp className="scale-[2] sm:m-4 hover:cursor-pointer hover:text-[#ee2400]"></FaArrowCircleUp>
        </LinkS>
      </div>
    </div>
  );
};

export default Navbar2;
