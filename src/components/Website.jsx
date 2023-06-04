import React, { useRef } from "react";
import { Element } from "react-scroll";
import Typed from "react-typed";

const Website = () => {

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
              <p className="text-white font-bold md:text-3xl sm:text-2xl text-xl pb-10">
                This website was made using ReactJS, leveraging its component
                based architecture. The styling was done using Tailwind CSS.
                Various react libraries were used to achieve tasks like
                animations, scroll effect, parallax effects etc.
              </p>

              <p className="text-white font-bold md:text-3xl sm:text-2xl text-xl pb-10">
                The backend was created primarily using Java, Spring, Spring
                Boot, Spring Rest, Hibernate, Spring Data JPA, SQL.
              </p>
              <Typed
                className="text-white font-bold md:text-3xl sm:text-2xl text-l"
                strings={["(Backend part will be up and running soon)"]}
                typeSpeed={50}
                backSpeed={50}
                loop
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Website;
