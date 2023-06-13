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

    </div>
  );
};

export default Navbar2;
