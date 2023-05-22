import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Me from "./components/Me";
import Experience from "./components/Experience";
import { ExperienceTwo } from "./components/ExperienceTwo";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Me />
      <Experience />
      <ExperienceTwo />
      <Footer/>
    </div>
  );
}

export default App;
