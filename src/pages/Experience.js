// pages/Experience.js
import React from 'react';

function Experience() {
  return (
    <div data-aos="zoom-in">
      <h2>Experience</h2>
      <div className="job">
        <h3>Trainee Support Software Engineer</h3>
        <p>ARS Infotech (Jan 2023 - Apr 2024)</p>
        <ul>
          <li>Resolved software issues, providing technical support and optimizing performance.</li>
          <li>Collaborated on debugging and system improvements.</li>
          <li>Used advanced Excel for data analysis and reporting.</li>
        </ul>
      </div>
      <div className="job">
        <h3>Intern</h3>
        <p>Verzeo (Jun 2021 - Aug 2021)</p>
        <ul>
          <li>Supported the implementation of cybersecurity protocols.</li>
          <li>Conducted research on emerging threats and contributed to defense strategies.</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
