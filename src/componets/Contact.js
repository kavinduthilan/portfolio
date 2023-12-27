import React from "react";
import "./Contact.css";
import add from "./images/gps.png";
import mail from "./images/email.png";
import tele from "./images/phone.png";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h1>Contact Me</h1>
      <div className="grid-container">
        <div className="container-1">
          <div className="line">
            <img src={add} alt="add" />
            "kumudu" Omatta Road,Kurunduwatta,Agalawatta.
          </div>
          <br />
          <div className="line">
            <img src={mail} alt="mail" />
            kavinduthilan1998@gmail.com
          </div>
          <br />
          <div className="line">
            <img src={tele} alt="tele" />
            +9477-8492679
          </div>
        </div>
        <div className="container-2">
          <form>
            <input type="text" placeholder="Name" />
            <br />
            <input type="email" placeholder="E-mail" />
            <br />
            <textarea cols={52} rows={10} placeholder="message"></textarea>
            <br />
            <input type="submit" value="Send Message" />
          </form>
        </div>
      </div>
    </div>
  );
}
