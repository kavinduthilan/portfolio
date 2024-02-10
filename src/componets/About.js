import React from "react";
import "./About.css";
import pic from "./images/CS.jpeg";
import { Typography, List, ListItem, ListItemText } from "@mui/material";

export default function About() {
  return (
    <div id="about">
      <h1>About Me</h1>
      <div className="about">
        <div className="photo">
          <img src={pic} alt="mypic" />
        </div>
        <div className="bio">
          <Typography variant="body1">
            I am a full stack developer with a passion for web development. I
            have experience in building web applications using modern
            technologies. I am a quick learner and always eager to learn new
            technologies. I am a team player.
          </Typography>
          <div className="education">
            <Typography variant="h2">Education</Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Bachelor's Degree in Computer Science"
                  secondary="[University Name]"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="High School Diploma"
                  secondary="[High School Name]"
                />
              </ListItem>
            </List>
          </div>
        </div>
      </div>
    </div>
  );
}
