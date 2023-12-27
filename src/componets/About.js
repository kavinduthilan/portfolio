import React from "react";
import "./About.css";
import pic from "./images/CS.jpeg";

export default function About() {
  return (
    <div id="about">
      <h1>About Me</h1>
      <div className="about">
        <div className="photo">
          <img src={pic} alt="mypic" />
        </div>
        <div className="bio">knsncl</div>
      </div>
    </div>
  );
}
