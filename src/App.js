// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/home'; 
import About from './pages/about'; 
import Skills from './pages/skills'; 
import Experience from './pages/Experience';
import Project from './pages/Project'; 
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/contact'; 
import LanternButton from './components/LanternButton'; 
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <div className="App">
        <h1 className="name-header">Atharva Kulkarni</h1> {/* Your name here */}
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/project">Project</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <LanternButton /> {/* Add the LanternButton here */}
      </div>
    </Router>
  );
}

export default App;
