import React from "react";
import Me from "../components/Me";
import Experience from "../components/Experience";
import ExperienceTwo from "../components/ExperienceTwo";
import Landing from "../components/Landing";
import Skills from "../components/Skills";
import Website from "../components/Website";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const First = () => {
  return (
    <div>

        <Navbar />

      <Landing />
      <Me />
      <Skills />
      <Website />
      <Experience />
      <Footer />
    </div>
  );
};

export default First;
