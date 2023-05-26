import React from "react";
import {
  FaGithubSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitter,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#c31f42] text-center md:text-left">
          Roshan Singh
        </h1>
        <p className="text-center md:text-left mt-3">
          +91 9820223936 <br />
          +91 8369557092 <br />
          singh.roshan501105@gmail.com
        </p>
      </div>
      <div className="flex justify-between md:w-[75%] my-6 mx-20 md:mx-2">
        <a
          href="https://www.linkedin.com/in/roshan-singh-b71587163/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/therawsingh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare size={30} />
        </a>
        <a
          href="https://www.facebook.com/singh.roshan501105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare size={30} />
        </a>
        <a
          href="https://www.instagram.com/therawsingh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare size={30} />
        </a>
        <a
          href="https://twitter.com/therawsingh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={30} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
