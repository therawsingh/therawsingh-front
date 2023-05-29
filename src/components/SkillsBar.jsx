import React from "react";
import "../style/bar.css"

function SkillsBar() {
  return (
    <div className="container">
      <div className="skill-box">
        <span className="title my-2 sm:my-0">Java</span>
        <div className="skill-bar">
          <span className="skill-per java"></span>
          <span className="tooltip">80%</span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title my-2 sm:my-0">Spring Core + Spring Boot</span>
        <div className="skill-bar">
          <span className="skill-per spring"></span>
          <span className="tooltip">60%</span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title my-2 sm:my-0">SQL</span>
        <div className="skill-bar">
          <span className="skill-per sql"></span>
          <span className="tooltip">70%</span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title my-2 sm:my-0">Hibernate</span>
        <div className="skill-bar">
          <span className="skill-per hibernate"></span>
          <span className="tooltip">60%</span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title my-2 sm:my-0">HTML</span>
        <div className="skill-bar">
          <span className="skill-per html"></span>
          <span className="tooltip">60%</span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title my-2 sm:my-0">ReactJS</span>
        <div className="skill-bar">
          <span className="skill-per reactjs"></span>
          <span className="tooltip">40%</span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title my-2 sm:my-0">Tailwind CSS</span>
        <div className="skill-bar">
          <span className="skill-per tailwind"></span>
          <span className="tooltip">40%</span>
        </div>
      </div>
    </div>
  );
}

export default SkillsBar;
