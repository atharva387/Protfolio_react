// pages/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import './Home.css'; // Import your CSS file for styling
import 'font-awesome/css/font-awesome.min.css'; // Import FontAwesome for social media icons
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Home() {
  // Skill data
  const skills = [
    { category: 'Programming Languages', skills: [{ name: 'C', rating: 90 }, { name: 'C++', rating: 80 }, { name: 'Java', rating: 75 }] },
    { category: 'Web Technologies', skills: [{ name: 'HTML', rating: 85 }, { name: 'CSS', rating: 80 }] },
    { category: 'Databases', skills: [{ name: 'MySQL', rating: 70 }, { name: 'Firebase', rating: 60 }] },
    { category: 'Cloud Technologies', skills: [{ name: 'AWS', rating: 65 }] },
    { category: 'Tools', skills: [{ name: 'Git', rating: 80 }, { name: 'GitHub', rating: 85 }] },
    { category: 'IDEs', skills: [{ name: 'Anaconda', rating: 75 }, { name: 'Eclipse', rating: 70 }, { name: 'Visual Studio Code', rating: 90 }, { name: 'Android Studio', rating: 65 }] },
  ];

  return (
    <motion.div 
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="left-section">
        <motion.div 
          className="lhs-content"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <div className="about-card">
            <h1>About Me</h1>
            <p>
              I’m <strong>Atharva Kulkarni</strong>, a Software Developer currently working at <strong>Pranita Enterprises</strong>. I specialize in developing web and hybrid applications, automating tasks, and solving real-world problems through technology.
            </p>
            <div className="contact-info">
              <h2>Contact Me</h2>
              <p>Email: <a href="mailto:atharvakulkarni1612@gmail.com">atharvakulkarni1612@gmail.com</a></p>
              <p>Phone: +91-9518943376</p>
              <div className="social-icons">
                <motion.a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <i className="fa fa-facebook"></i>
                </motion.a>
                <motion.a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <i className="fa fa-instagram"></i>
                </motion.a>
                <motion.a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <i className="fa fa-linkedin"></i>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="scrollable-section">
        <section className="skills-section">
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 3 }}>
            Skills
          </motion.h2>
          <div className="skills-horizontal">
            {skills.map((category, index) => (
              <div key={index} className="skill-category">
                <h3>{category.category}</h3>
                <div className="skill-items">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="skill-item">
                      <CircularProgressbar
                        value={skill.rating}
                        text={skill.name}
                        styles={buildStyles({
                          textColor: '#f5f5f5',
                          pathColor: '#61dafb',
                          trailColor: '#444',
                          textSize: '10px',
                        })}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="education-section">
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 4 }}>
            Education
          </motion.h2>
          <ul>
            <li>B.E. in Information Technology (Honors in Cyber Security) - SPPU, 2020 - 2023 (GPA: 8.65/10)</li>
            <li>Diploma in Computer Science - Ekalavya Polytechnic, 2018 - 2020 (GPA: 7.1/10)</li>
            <li>Class 12th - HSC Board (2017) - 59.40%</li>
            <li>Class 10th - SSC Board (2015) - 86.46%</li>
          </ul>
        </section>

        <section className="experience-section">
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 5 }}>
            Work Experience
          </motion.h2>
          <div className="job">
            <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 5.5 }}>
              Software Developer - Pranita Enterprises (April 2024 - Present)
            </motion.h3>
            <ul>
              <li>Developed websites for multiple companies using React and React Native.</li>
              <li>Automated Excel workflows using AppSheet and custom scripts.</li>
              <li>Working on a hybrid e-commerce platform development.</li>
            </ul>
          </div>
          <div className="job">
            <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 6 }}>
              Trainee Support Software Engineer - ARS Infotech (Jan 2023 - Apr 2024)
            </motion.h3>
            <ul>
              <li>Resolved software issues and optimized performance.</li>
              <li>Collaborated on debugging and system improvements.</li>
              <li>Used advanced Excel for data analysis and reporting.</li>
            </ul>
          </div>
          <div className="job">
            <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 6.5 }}>
              Intern - Verzeo (June 2021 - Aug 2021)
            </motion.h3>
            <ul>
              <li>Assisted in identifying and mitigating potential security threats.</li>
              <li>Conducted research on emerging cyber threats.</li>
            </ul>
          </div>
        </section>

        <section className="projects-section">
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 7 }}>
            Projects
          </motion.h2>
          <ul>
            <li>BookMyTable: A dual-platform application for hotel reservations.</li>
            <li>Easy Trials: A remote patient monitoring app.</li>
            <li>Credit Card Approval Prediction: Machine learning model for credit card approvals.</li>
          </ul>
        </section>

        <section className="extracurricular-section">
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 7.5 }}>
            Extracurricular Activities
          </motion.h2>
          <ul>
            <li>Founder, Explore X Escape: Organized trekking events and outdoor adventures (Jan 2022 - Present).</li>
            <li>Member, Rotaract Club Mideast, Pune: Participated in community service projects (Sept 2021 - Present).</li>
          </ul>
        </section>

        <section className="publications-section">
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 8 }}>
            Publications
          </motion.h2>
          <ul>
            <li>Credit Card Approval Prediction Using Machine Learning (Published in May 2023).</li>
          </ul>
        </section>
      </div>
    </motion.div>
  );
}

export default Home;
