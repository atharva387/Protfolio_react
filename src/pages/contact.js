// pages/Contact.js
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <div data-aos="flip-left">
      <h2>Contact Me</h2>
      <ul className="contact-details">
        <li><FaEnvelope /> <a href="mailto:atharvakulkarni1612@gmail.com">atharvakulkarni1612@gmail.com</a></li>
        <li><FaGithub /> <a href="https://github.com/atharva387">GitHub</a></li>
        <li><FaLinkedin /> <a href="https://www.linkedin.com/in/atharvakulkarni16/">LinkedIn</a></li>
      </ul>
    </div>
  );
}

export default Contact;
