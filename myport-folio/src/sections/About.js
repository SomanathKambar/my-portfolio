import React from 'react';
import { usePortfolioData } from '../hooks/usePortfolioData';
import { motion } from 'framer-motion';
import { FaAndroid, FaUsers, FaRocket, FaCode } from 'react-icons/fa';

const About = () => {
  const data = usePortfolioData();

  if (!data) return null;

  const { personalInfo, upskilling } = data;

  const stats = [
    { icon: <FaAndroid />, label: "Projects Completed", value: "10+" },
    { icon: <FaCode />, label: "Years Experience", value: "7+" },
    { icon: <FaRocket />, label: "Apps Developed", value: "10+" },
    { icon: <FaUsers />, label: "Team Members Mentored", value: "4+" }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2>About Me</h2>
          <p>Passionate Software Engineer crafting digital experiences</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="about-text"
          >
            <h3>Building the Future of Mobile Experiences</h3>
            <p>
              I'm a dedicated Software Engineer with over 6 years of experience creating 
              innovative Mobile, TV , Tablet and Web Applications. My expertise spans across Kotlin, Java, React, React Native 
              and modern Android development practices including Jetpack Compose, 
              Clean Architecture, and MVVM pattern.
            </p>
            <p>
              Throughout my career, I've worked on diverse projects ranging from 
              POS systems and Android TV applications to AI-powered image processing 
              tools and subscription-based news platforms.
            </p>
            <p>
              I believe in writing clean, maintainable code and following best 
              practices to deliver high-quality applications that provide exceptional 
              user experiences.
            </p>

            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="stat-item"
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="about-skills"
          >
            <h4>Currently Learning</h4>
            <div className="learning-list">
              {upskilling.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="learning-item"
                >
                  <span className="learning-badge">New</span>
                  {skill}
                </motion.div>
              ))}
            </div>
            
            <div className="about-availability">
              <h4>Availability</h4>
              <p className="availability-text">
                <span className="available-dot"></span>
                {personalInfo.availability}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;