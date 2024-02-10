import React, { useRef} from "react";
import "./Contact.css";
import add from "./images/gps.png";
import mail from "./images/email.png";
import tele from "./images/phone.png";
import emailjs from '@emailjs/browser';
import {TextField,Button} from "@mui/material";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9bqaxxw', 'template_4uw2i8e', form.current, 'B3jiIxXZLjXrRsilc')
      .then((result) => {
          alert("Message Sent, We will get back to you shortly", result.text);
          //console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
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
          <form ref={form} onSubmit={sendEmail}>
            <TextField
              type="text"
              label="Your Name"
              placeholder="Your Name"
              name="name"
              fullWidth
              margin="normal"
              required
              InputLabelProps={{
                style: {
                  color: 'white'
                      }
              }}
            />
            
            <TextField
              type="email"
              label="Your E-mail"
              placeholder="Your E-mail"
              name="email"
              fullWidth
              margin="normal"
              required
              InputLabelProps={{
                style: {
                  color: 'white'
                      }
              }}
            />
            <TextField
              multiline
              rows={10}
              label="Message"
              placeholder="Message"
              name="message"
              fullWidth
              margin="normal"
              required
              InputLabelProps={{
                style: {
                  color: 'white'
                      }
              }}
            />
            <Button variant="contained" type="submit">
              Send Message
            </Button>
      </form>
        </div> 
      </div>
    </div>
  );
}
