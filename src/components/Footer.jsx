import React from "react";
import {
  FaGithubSquare,
  FaInstagramSquare,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

import pdf from "../assets/Resume.pdf";

const Footer = () => {
  return (
    <div className="flex justify-start p-2 sm:p-8 text-white font-josefin sticky bottom-0 max-w-[200px]">
      <div className="">
        <a
          href="https://www.linkedin.com/in/roshan-singh-b71587163/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            size={30}
            className="m-2 hover:text-[#ee2400] hover:scale-110 transition-duration-1s"
          />
        </a>
        <a
          href="https://github.com/therawsingh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare
            size={30}
            className="m-2 hover:text-[#ee2400] hover:scale-110 transition-duration-1s"
          />
        </a>
        <a
          href="https://www.instagram.com/therawsingh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare
            size={30}
            className="m-2 hover:text-[#ee2400] hover:scale-110 transition-duration-1s"
          />
        </a>
        <FaEnvelope
          size={30}
          className="m-2 hover:text-[#ee2400] hover:scale-110 transition-duration-1s"
        />
        <FaWhatsapp
          size={30}
          className="m-2 hover:text-[#ee2400] hover:scale-110 transition-duration-1s"
        />
        <a
          href={pdf}
          download="Roshan Singh Resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDownload
            size={30}
            className="m-2 hover:text-[#ee2400] hover:scale-110 transition-duration-1s"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
