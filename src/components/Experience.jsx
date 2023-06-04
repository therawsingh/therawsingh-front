import React, { useRef } from "react";
import { Element } from "react-scroll";

const Experience = () => {
  const plane = useRef(null);

  return (
    <div>
      <Element name="experience"></Element>
      <div className="w-full py-6 font-josefin">
        <div className="max-w-[1920px] w-9/12 h-screen mx-auto text-left pr-10 flex items-center text-lg">
          <div className="pl-6">
            <h6 className="text-[#ee2400] pb-4 text-sm sm:text-xl">
              Experience (Hover/Tap for more)
            </h6>
            <div className="w-full">
              <Text3d
                primary={"Capgemini"}
                secondary={"Automation Tester Jan'22 - Jul'22"}
              />
              <Text3d primary={"Infosys"} secondary={"Automation Tester Oct'19 - Jan'22"} />
              <Text3d primary={"Backend Developer"} secondary={"Self-Taught (Java)"} />
              <Text3d
                primary={"Frontend Developer"}
                secondary={"Self-Taught (ReactJS)"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Text3d({ primary, secondary }) {
  return (
    <div className="textContainer">
      <p className="primary w-full pb-5">{primary}</p>
      <p className="secondary w-full pb-1">{secondary}</p>
    </div>
  );
}

export default Experience;
