import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

// Header Component
function Header() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <header className="header">
      <h1 data-aos="zoom-in">Atharva Kulkarni</h1>
      <p data-aos="zoom-out">Data Analyst | B.E. in Information Technology</p>
      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

// About Section
function About() {
  return (
    <section id="about" className="about" data-aos="fade-right">
      <h2>About Me</h2>
      <p>
        As a recent B.E. Information Technology graduate, I’m excited to kickstart my career as a data analyst. I have experience in data analysis using advanced Excel, and I’m eager to contribute to business decisions through data-driven insights.
      </p>
    </section>
  );
}

// Skills Section
function Skills() {
  return (
    <section id="skills" className="skills" data-aos="fade-left">
      <h2>Skills</h2>
      <ul>
        <li>Programming Languages: C, C++, Java</li>
        <li>Web Technologies: HTML, CSS</li>
        <li>Databases: MySQL, Firebase</li>
        <li>Tools: Advanced Excel, GitHub</li>
      </ul>
    </section>
  );
}

// Experience Section
function Experience() {
  return (
    <section id="experience" className="experience" data-aos="flip-up">
      <h2>Work Experience</h2>
      <div className="job">
        <h3>Trainee Support Software Engineer</h3>
        <p>ARS Infotech (Jan 2023 - Apr 2024)</p>
        <ul>
          <li>Assisted in troubleshooting and resolving software issues.</li>
          <li>Collaborated with senior engineers to enhance software functionality.</li>
          <li>Utilized Excel for data analysis and reporting to improve decision-making.</li>
        </ul>
      </div>
      <div className="job">
        <h3>Intern</h3>
        <p>Verzeo (Jun 2021 - Aug 2021)</p>
        <ul>
          <li>Identified and mitigated security threats and vulnerabilities.</li>
          <li>Supported the implementation of security measures and protocols.</li>
        </ul>
      </div>
    </section>
  );
}

// Projects Section
function Projects() {
  return (
    <section id="projects" className="projects" data-aos="fade-up">
      <h2>Projects</h2>
      <ul>
        <li>
          <strong>BookMyTable (Android and Web)</strong>: A dual-platform application for hotel table reservations and online food ordering.
        </li>
        <li>
          <strong>Easy Trials (Android)</strong>: Designed an application for remote patient monitoring using smart devices.
        </li>
        <li>
          <strong>Credit Card Approval Prediction (Machine Learning)</strong>: Developed a machine learning model to predict credit card approvals.
        </li>
      </ul>
    </section>
  );
}

// Contact Section
function Contact() {
  return (
    <section id="contact" className="contact" data-aos="fade-in">
      <h2>Contact</h2>
      <ul className="contact-details">
        <li>
          <FaEnvelope /> <a href="mailto:atharvakulkarni1612@gmail.com">atharvakulkarni1612@gmail.com</a>
        </li>
        <li>
          <FaPhone /> +91-9518943376
        </li>
        <li>
          <FaGithub /> <a href="https://github.com/atharva387">GitHub</a>
        </li>
        <li>
          <FaLinkedin /> <a href="https://www.linkedin.com/in/atharvakulkarni16/">LinkedIn</a>
        </li>
      </ul>
    </section>
  );
}

// Main App Component
function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
