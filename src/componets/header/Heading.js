import React from "react";
import "./Heading.css";
import { Link } from "react-scroll";

export default function heading() {
  return (
    <div className="heading" id="home">
      <ul className="navbar">
        <li>
          <Link to="home" smooth={true} duration={-100}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={-100}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={-100}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={-100}>
            Works
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={-100}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
