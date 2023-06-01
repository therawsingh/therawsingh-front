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
    <div className="flex justify-start p-8 text-white font-josefin sticky bottom-0">
      <div className="">
        <a
          href="https://www.linkedin.com/in/roshan-singh-b71587163/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            size={30}
            className="m-2 hover:text-[#c40233] hover:scale-110 transition-duration-1s"
          />
        </a>
        <a
          href="https://github.com/therawsingh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare
            size={30}
            className="m-2 hover:text-[#c40233] hover:scale-110 transition-duration-1s"
          />
        </a>
        <a
          href="https://www.facebook.com/singh.roshan501105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare
            size={30}
            className="m-2 hover:text-[#c40233] hover:scale-110 transition-duration-1s"
          />
        </a>
        <a
          href="https://www.instagram.com/therawsingh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare
            size={30}
            className="m-2 hover:text-[#c40233] hover:scale-110 transition-duration-1s"
          />
        </a>
        <a
          href="https://twitter.com/therawsingh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter
            size={30}
            className="m-2 hover:text-[#c40233] hover:scale-110 transition-duration-1s"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
