import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navVisibility = () =>
  {
    {nav
      ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#0c0c0c] ease-in-out duration-500"
      : "fixed left-[-100%]";
    }
  }

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#c31f42]">therawsingh</h1>
      <ul className="hidden md:flex py-10 my-4">
        <li className="p-4 border border-transparent transition duration-300 hover:border-b-2 hover:cursor-pointer hover:border-b-[#c31f42]">
          <Link to="aboutMe" smooth={true} duration={500}>
            Me
          </Link>
        </li>
        <li className="p-4 border-t-2 border-transparent transition duration-300 hover:border-t-2 hover:cursor-pointer hover:border-t-[#c31f42]">
          <Link to="experience" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li className="p-4 border border-transparent transition duration-300 hover:border-b-2 hover:cursor-pointer hover:border-b-[#c31f42]">
          <Link to="aboutMe" smooth={true} duration={500}>
            Website
          </Link>
        </li>
        <li className="p-4 border-t-2 border-transparent transition duration-300 hover:border-t-2 hover:cursor-pointer hover:border-t-[#c31f42]">
          Blog
        </li>
        <li className="p-4 border border-transparent transition duration-300 hover:border-b-2 hover:cursor-pointer hover:border-b-[#c31f42]">
          Tools
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
            <Link
              className="py-4 border-b hover:border-[#c31f42] hover:cursor-pointer transition duration-300"
              to="aboutMe"
              smooth={true}
              duration={500}
              onClick={handleNav}
            >
              Me
            </Link>
          </li>
          <li className="p-4">
            <Link
              className="py-4 border-b hover:border-[#c31f42] hover:cursor-pointer transition duration-300"
              to="experience"
              smooth={true}
              duration={500}
              onClick={handleNav}
            >
              Experience
            </Link>
          </li>
          <li className="p-4">
            <Link
              className="py-4 border-b hover:border-[#c31f42] hover:cursor-pointer transition duration-300"
              to="aboutMe"
              smooth={true}
              duration={500}
              onClick={handleNav}
            >
              Website
            </Link>
          </li>
          <li className="p-4 border-b hover:border-[#c31f42] hover:cursor-pointer transition duration-300">
            Blog
          </li>
          <li className="p-4 border-b hover:border-[#c31f42] hover:cursor-pointer transition duration-300">
            Tools
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
