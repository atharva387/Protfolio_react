// pages/Project.js
import React, { useState } from 'react';
import './Project.css';
import img1 from '../assets/img1.jpg'; // Ensure img1.jpg is in the assets folder.

function Project() {
  const projectList = [
    {
      id: 1,
      name: "BookMyTable",
      description: "A platform for hotel table reservations and online food ordering.",
      techUsed: "React, Node.js, MongoDB",
      learned: "Full-stack development, REST APIs",
      achieved: "Successfully deployed an application used in multiple cafes."
    },
    {
      id: 2,
      name: "Easy Trials",
      description: "An application for remote patient monitoring using smart devices.",
      techUsed: "Flutter, Firebase",
      learned: "Mobile app development, real-time data processing",
      achieved: "Improved patient monitoring efficiency."
    },
    {
      id: 3,
      name: "Credit Card Approval Prediction",
      description: "A machine learning model for predicting credit card approvals.",
      techUsed: "Python, scikit-learn, pandas",
      learned: "Machine learning algorithms, data preprocessing",
      achieved: "Developed a model with an accuracy of over 85%."
    }
  ];

  const [selectedProject, setSelectedProject] = useState(projectList[0]);

  return (
    <div className="projects-container" data-aos="fade-up">
      <h2>Projects</h2>
      <div className="projects-layout">
        <div className="projects-list">
          {projectList.map(project => (
            <div
              key={project.id}
              className="project-item"
              onClick={() => setSelectedProject(project)} // Update selected project on click
            >
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
        
        <div className="project-display">
          <h3>{selectedProject.name}</h3>
          <p>{selectedProject.description}</p>
          <p><strong>Technologies Used:</strong> {selectedProject.techUsed}</p>
          <p><strong>What I Learned:</strong> {selectedProject.learned}</p>
          <p><strong>Achievements:</strong> {selectedProject.achieved}</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
