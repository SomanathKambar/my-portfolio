import { usePortfolioData } from '../hooks/usePortfolioData';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaCode } from 'react-icons/fa';

const Experience = () => {
  const data = usePortfolioData();

  if (!data) return null;

  const { experience } = data;

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2>Work Experience</h2>
          <p>7+ years of professional Android development experience</p>
        </motion.div>

        <div className="experience-timeline">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="experience-item"
            >
              <div className="experience-header">
                <div className="experience-icon">
                  <FaBriefcase />
                </div>
                <div className="experience-info">
                  <h3 className="company">{exp.company}</h3>
                  <p className="role">{exp.role || exp.type}</p>
                  <p className="period">
                    <FaCalendar /> {exp.period}
                  </p>
                </div>
              </div>

              {exp.project && (
                <div className="project-info">
                  <h4>Project: {exp.project}</h4>
                  <p className="project-description">{exp.description}</p>
                </div>
              )}

              {exp.projects && (
                <div className="project-info">
                  <h4>Projects:</h4>
                  <div className="projects-list">
                    {exp.projects.map((project, idx) => (
                      <span key={idx} className="project-tag">{project}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="responsibilities">
                <h4>Key Responsibilities:</h4>
                <ul>
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div className="tech-stack">
                <h4>
                  <FaCode /> Technologies
                </h4>
                <div className="tech-tags">
                  {exp.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              {exp.architecture && (
                <div className="architecture">
                  <strong>Architecture:</strong> {exp.architecture}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;