import React from "react";
import "../style/bar.css"

function SkillsBar() {
  return (
    <div className="container">
      <div className="skill-box">
        <span className="title">Java</span>
        <div className="skill-bar">
          <span className="skill-per java">
            <span className="tooltip">80%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">Spring</span>
        <div className="skill-bar">
          <span className="skill-per spring">
            <span className="tooltip">60%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">SQL</span>
        <div className="skill-bar">
          <span className="skill-per sql">
            <span className="tooltip">70%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">Hibernate</span>
        <div className="skill-bar">
          <span className="skill-per hibernate">
            <span className="tooltip">60%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">HTML</span>
        <div className="skill-bar">
          <span className="skill-per html">
            <span className="tooltip">60%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">ReactJS</span>
        <div className="skill-bar">
          <span className="skill-per reactjs">
            <span className="tooltip">40%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">Tailwind CSS</span>
        <div className="skill-bar">
          <span className="skill-per tailwind">
            <span className="tooltip">40%</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SkillsBar;
