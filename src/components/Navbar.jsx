import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#c31f42]">therawsingh</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Me</li>
        <li className="p-4">Website</li>
        <li className="p-4">Blog</li>
        <li className="p-4">Tools</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#0c0c0c] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#c31f42] my-7 mx-4">
          therawsingh
        </h1>
        <ul className="p-4">
          <li className="p-4 border-b border-[#c31f42]">Me</li>
          <li className="p-4 border-b border-[#c31f42]">Website</li>
          <li className="p-4 border-b border-[#c31f42]">Blog</li>
          <li className="p-4">Tools</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
