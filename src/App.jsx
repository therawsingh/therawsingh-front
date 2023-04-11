import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Me from "./components/Me";
import Experience from "./components/Experience";
import { ExperienceTwo } from "./components/ExperienceTwo";

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Me />
      <Experience />
      <ExperienceTwo/>
    </div>
  );
}

export default App;
