import React from "react";
import "./About.css";
import education from "../../images/mortarboard.png";

export default function About() {
  return (
    <div id="about">
      <h1>About Me</h1>
      <div className="about">
        <div className="bio">
          <p>
            I am a Computer Science undergraduate at University of Ruhuna. I am
            a highly motivated individual who is passionate about programming
            and software development. I am always eager to learn new
            technologies and to take on new challenges. I am a team player who
            is able to work effectively in a team and I am also capable of
            working independently. I am a quick learner and I am always willing
            to take on new opportunities to improve my skills.
          </p>
          <div className="row">
            <div className="column">
              <div className="content">
                <img id="edu" src={education} alt="education" />
                <div className="EdName">Bachelor of Computer Science (BCS)</div>
                <p>University of Ruhuna</p>
                <p>2021-2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
