import React from 'react';
import { useParams } from 'react-router-dom';

const projectData = {
  1: {
    name: "BookMyTable",
    description: "A platform for hotel table reservations and online food ordering, implemented with a dual-platform approach (Android and Web).",
    details: "Features include table booking, bill generation, and online payment."
  },
  2: {
    name: "Easy Trials",
    description: "An application for remote patient monitoring using smart devices.",
    details: "Analyzed patient data trends to enhance healthcare outcomes."
  },
  3: {
    name: "Credit Card Approval Prediction",
    description: "A machine learning model developed for predicting credit card approvals.",
    details: "Used predictive analytics techniques to build and test the model."
  }
};

function ProjectDetails() {
  const { id } = useParams(); // Get the project ID from the URL
  const project = projectData[id]; // Get the project details using the ID

  return (
    <div data-aos="fade-in">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <p>{project.details}</p>
    </div>
  );
}

export default ProjectDetails;
