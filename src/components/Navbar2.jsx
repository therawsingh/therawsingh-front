import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

const Navbar2 = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navVisibility = () => {
    {
      nav
        ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#0c0c0c] ease-in-out duration-500"
        : "fixed left-[-100%]";
    }
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] w-full mx-auto px-4 text-white bg-[#0c0c0c]">
      <h1 className="w-full text-3xl font-bold text-[#c31f42]">
        <LinkR to="/">therawsingh</LinkR>
      </h1>
      <ul className="hidden md:flex py-10 my-4">
        <li className="p-4 border border-transparent transition duration-300 hover:border-b-2 hover:cursor-pointer hover:border-b-[#c31f42]">
          <LinkR to="/">Home</LinkR>
        </li>
        <li className="p-4 border border-transparent transition duration-300 hover:border-b-2 hover:cursor-pointer hover:border-b-[#c31f42]">
          <LinkR to="/tools">Tools</LinkR>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden hover:cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#0c0c0c] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <div className="grid-flow-col columns-2">
          <h1 className="w-full text-3xl font-bold text-[#c31f42] my-7 mx-4">
            therawsingh
          </h1>
        </div>
        <ul className="p-4">
          <li className="p-4">
            <LinkR
              className="py-4 border-b hover:border-[#c31f42] hover:cursor-pointer transition duration-300"
              to="/"
            >
              Home
            </LinkR>
          </li>
          <li className="p-4">
            <LinkR
              className="py-4 border-b hover:border-[#c31f42] hover:cursor-pointer transition duration-300"
              to="/tools"
            >
              Tools
            </LinkR>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar2;
