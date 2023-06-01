import React from "react";
import {
  FaGithubSquare,
  FaInstagramSquare,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaDownload
} from "react-icons/fa";

import pdf from "../assets/Resume.pdf";
import { Tooltip } from "react-tooltip";

const Footer = () => {
  return (
    <div className="flex justify-start p-2 sm:p-8 text-white font-josefin sticky bottom-0 max-w-[200px]">
      <div className="">
        <a
          href="https://www.linkedin.com/in/roshan-singh-b71587163/"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Linkedin"
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
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Github"
        >
          <FaGithubSquare
            size={30}
            className="m-2 hover:text-[#c40233] hover:scale-110 transition-duration-1s"
          />
        </a>
        <a
          href="https://www.instagram.com/therawsingh/"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Instagram"
        >
          <FaInstagramSquare
            size={30}
            className="m-2 hover:text-[#c40233] hover:scale-110 transition-duration-1s"
          />
        </a>
        <a
          href={pdf}
          download="Resume"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Download Resume"
        >
          <FaDownload
            size={30}
            className="m-2 hover:text-[#c40233] hover:scale-110 transition-duration-1s"
          />
        </a>
        <FaEnvelope
          size={30}
          className="m-2 hover:text-[#c40233] hover:scale-110 transition-duration-1s"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="singh.roshan501105@gmail.com"
        />
        <FaWhatsapp
          size={30}
          className="m-2 hover:text-[#c40233] hover:scale-110 transition-duration-1s"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="+91 9820223936"
        />
        <Tooltip id="my-tooltip" />
      </div>
    </div>
  );
};

export default Footer;
