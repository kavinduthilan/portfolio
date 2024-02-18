import React from "react";
import "./About.css";
import pic from "./images/CS.jpeg";
import { Typography, List, ListItem, ListItemText } from "@mui/material";

export default function About() {
  return (
    <div id="about">
      <h1>About Me</h1>
      <div className="about">
        <div className="bio">
          <p>
                        I am a Computer Science undergraduate at University of Ruhuna. I am a
            highly motivated individual who is passionate about programming and
            software development. I am always eager to learn new technologies and to
            take on new challenges. I am a team player who is able to work effectively
            in a team and I am also capable of working independently. I am a quick
            learner and I am always willing to take on new opportunities to improve my
            skills.
          </p>
        
        </div>
      </div>
    </div>
  );
}
