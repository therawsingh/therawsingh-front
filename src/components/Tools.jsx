import React from "react";
import Typed from "react-typed";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const Tools = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto md:grid sm:grid grid">
        <p className="text-[#c31f42] font-bold p-4 md:text-3xl sm:text-2xl text-xl text-center">
          Welcome to the tools page.
        </p>

        <Player
          autoplay
          loop
          src="https://assets1.lottiefiles.com/private_files/lf30_y9czxcb9.json"
          style={{ height: "500px", width: "500px" }}
        ></Player>

        <div className="flex justify-center items-center">
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#c31f42] py-8"
            strings={["This page is under construction"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
      </div>
    </div>
  );
};

export default Tools;
