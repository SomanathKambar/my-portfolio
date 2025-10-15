// src/sections/Hero.js
import React from 'react';
import { usePortfolioData } from '../hooks/usePortfolioData';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium, FaStackOverflow, FaDownload, FaMapMarkerAlt, FaBriefcase, FaUsers, FaRocket } from 'react-icons/fa';
import { profileImage  } from '../assets/images/profile/Somanath-kambar.jpg';
import { image } from 'framer-motion/client';


const Hero = () => {
  const data = usePortfolioData();
  const downloadFile = () => {
    window.location.href =
      "https://drive.google.com/uc?export=download&id=1AGCNX0WvFPCUS1qmR9JzTpszD5zSlHD5";
  };

  if (!data) return null;

  const { personalInfo } = data;

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-container">
          {/* Left Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="hero-badge"
            >
              <span className="badge-dot"></span>
              Available for Full-time, Part-time & Freelance
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="hero-greeting"
            >
              Hi, my name is
            </motion.p>

            <h1 className="hero-title">
              <span className="highlight">{personalInfo.name}</span>
            </h1>

            <h2 className="hero-subtitle">{personalInfo.title}</h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="hero-description"
            >
              {personalInfo.objective}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="hero-meta"
            >
              <div className="meta-item">
                <FaMapMarkerAlt className="meta-icon" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="meta-item">
                <span className="status-dot"></span>
                <span className="availability">
                  {personalInfo.availability}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="hero-social"
            >
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={personalInfo.social.medium}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium"
              >
                <FaMedium />
              </a>
              <a
                href={personalInfo.social.stackoverflow}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="StackOverflow"
              >
                <FaStackOverflow />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="hero-actions"
            >
              <a href="#contact" className="btn btn-primary">
                Start a Project
              </a>
              <a href="#projects" className="btn btn-secondary">
                View My Work
              </a>
              <button className="btn btn-outline" onClick={downloadFile}>
                <FaDownload /> Download Resume
              </button>
            </motion.div>
          </motion.div>

          {/* Right Profile Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-visual"
          >
            <div>
              <img
                src={require("../assets/images/profile/Somanath-kambar.jpg")}
                alt="Somanath Kambar - Android Developer"
                className="profile-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/profile/placeholder-avatar.jpg';
                }}
                loading="eager"
              />
              <div className="image-frame"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
