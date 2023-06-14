import React, { useRef, useEffect } from "react";
import { Element } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const Website = () =>
{
  
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Element name="website"></Element>
      <div className="w-full py-6 font-josefin">
        <div className="max-w-[1920px] w-9/12 h-screen mx-auto text-left pr-10 flex items-center">
          <div className="grid">
            <div className="flex flex-col justify-start pl-6">
              <h6 className="text-[#ee2400] pb-4 text-sm sm:text-xl">
                About the Website
              </h6>
              <p className="text-white md:text-3xl sm:text-2xl text-xl pb-10">
                This is my portfolio website, containing details about me and
                some utility tools. It is fully responsive website.
              </p>
              <p className="text-white md:text-3xl sm:text-2xl text-xl pb-10">
                The backend of this website was created primarily using{" "}
                <span className="text-[#ee2400]" data-aos="fade-right">
                  Java, Spring Boot, Spring Rest, Hibernate, Spring Data JPA,
                  SQL.
                </span>
              </p>

              <p className="text-white md:text-3xl sm:text-2xl text-xl pb-10">
                And the frontend using{" "}
                <span className="text-[#ee2400]" data-aos="fade-right">
                  ReactJS, leveraging its component based architecture. The
                  styling was done using Tailwind CSS, and various react
                  libraries.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Website;
