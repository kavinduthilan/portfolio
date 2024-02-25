import React from "react";
import "./Section.css";
import fb from "./images/facebook.png";
import ig from "./images/instagram.png";
import ln from "./images/linkedin.png";
import Typewriter from "typewriter-effect";
import pic from "./images/CS.jpeg";
import myCV from "./files/kavindu thilan (2).pdf";
import { Link } from "react-scroll";

export default function Section() {
  return (
    <div className="section">
      
      <div className="section-content">
        <h3>Hello,</h3>
        <h2>I am Kavindu Thilan</h2>
        <h4>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 100,
              strings: ["A FULL STACK DEVELOPER!"],
            }}
          />
        </h4>
        <div className="cv">
          <Link to="contact" smooth={true} duration={-100}>
            <button className="btn1">Contact Me</button>
          </Link>
          <a href={myCV} download="KavinduThilanCV.pdf">
            <button className="btn2">Download CV</button>
          </a>
          
        </div>
        

        <div className="social">
          <a href="https://www.google.com" rel="noreferrer" target="_blank">
            <img className="im1" src={fb} alt="fb" />
          </a>
          <a href="https://www.google.com" rel="noreferrer" target="_blank">
            <img className="im2" src={ig} alt="ig" />
          </a>
          <a href="https://www.linkedin.com/in/kavindu-thilan-324634210/" rel="noreferrer" target="_blank">
            <img className="im3" src={ln} alt="ln" />
          </a>
        </div>

      </div>

      <div className="profile-pic">
        <img src={pic} alt="kavindu" />
      </div>
      
    </div>
  );
}
