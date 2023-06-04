import React from "react";
import {
  FaGithubSquare,
  FaInstagramSquare,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

import * as Tooltip from "@radix-ui/react-tooltip";

import "../style/tooltip.css";

import pdf from "../assets/Resume.pdf";

const Footer = () => {
  return (
    <div className="flex justify-start p-2 sm:p-8 text-white font-josefin sticky bottom-0 max-w-[60px]">
      <div className="">
        <Tooltip.Provider>
          <Tooltip.Root delayDuration={300}>
            <Tooltip.Trigger asChild>
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
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content className="TooltipContent" sideOffset={5}>
                LinkedIn
                <Tooltip.Arrow className="TooltipArrow" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>

        <Tooltip.Provider>
          <Tooltip.Root delayDuration={300}>
            <Tooltip.Trigger asChild>
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
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content className="TooltipContent" sideOffset={5}>
                GitHub
                <Tooltip.Arrow className="TooltipArrow" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>

        <Tooltip.Provider>
          <Tooltip.Root delayDuration={300}>
            <Tooltip.Trigger asChild>
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
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content className="TooltipContent" sideOffset={5}>
                Instagram
                <Tooltip.Arrow className="TooltipArrow" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>

        <Tooltip.Provider>
          <Tooltip.Root delayDuration={300}>
            <Tooltip.Trigger asChild>
              <a>
                <FaEnvelope
                  size={30}
                  className="m-2 hover:text-[#ee2400] hover:scale-110 transition-duration-1s"
                />
              </a>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content className="TooltipContent" sideOffset={5}>
                singh.roshan501105@gmail.com
                <Tooltip.Arrow className="TooltipArrow" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>

        <Tooltip.Provider>
          <Tooltip.Root delayDuration={300}>
            <Tooltip.Trigger asChild>
              <a>
                <FaWhatsapp
                  size={30}
                  className="m-2 hover:text-[#ee2400] hover:scale-110 transition-duration-1s"
                />
              </a>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content className="TooltipContent" sideOffset={5}>
                +91 9820223936
                <Tooltip.Arrow className="TooltipArrow" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>

        <Tooltip.Provider>
          <Tooltip.Root delayDuration={300}>
            <Tooltip.Trigger asChild>
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
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content className="TooltipContent" sideOffset={5}>
                Download Resume
                <Tooltip.Arrow className="TooltipArrow" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
    </div>
  );
};

export default Footer;
