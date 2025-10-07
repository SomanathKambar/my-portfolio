// src/sections/Projects.js
import React from 'react';
import { usePortfolioData } from '../hooks/usePortfolioData';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaAndroid, FaServer } from 'react-icons/fa';

const Projects = () => {
  const data = usePortfolioData();

  if (!data) return null;

  const { projects } = data;

  // Add URLs for your projects (replace with actual URLs)
  const projectLinks = {
    "VideoPlayer": {
      demo: "#", // Add your demo URL
      code: "https://github.com/SomanathKambar" // Add your project URL
    },
    "ChatDemoUsingGetStream": {
      demo: "#",
      code: "https://github.com/SomanathKambar"
    },
    "KotlinSpringBoot": {
      demo: "#", 
      code: "https://github.com/SomanathKambar"
    }
  };

  const getProjectIcon = (projectName) => {
    if (projectName.toLowerCase().includes('video')) return <FaAndroid />;
    if (projectName.toLowerCase().includes('chat')) return <FaAndroid />;
    if (projectName.toLowerCase().includes('spring')) return <FaServer />;
    return <FaAndroid />;
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2>Projects</h2>
          <p>Some of my personal and hobby projects</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card"
            >
              <div className="project-header">
                <div className="project-icon">
                  {getProjectIcon(project.name)}
                </div>
                <div className="project-title-wrapper">
                  <h3 className="project-title">{project.name}</h3>
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-actions">
                <a 
                  href={projectLinks[project.name]?.code || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  <FaGithub /> Code
                </a>
                <a 
                  href={projectLinks[project.name]?.demo || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="projects-cta"
        >
          <h3>Want to see more projects?</h3>
          <p>Check out my GitHub profile for more code samples and projects</p>
          <a 
            href="https://github.com/SomanathKambar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FaGithub /> Visit GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;