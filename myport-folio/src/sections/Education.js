import { usePortfolioData } from '../hooks/usePortfolioData';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendar, FaUniversity } from 'react-icons/fa';

const Education = () => {
  const data = usePortfolioData();

  if (!data) return null;

  const { education, certifications, upskilling } = data;

  return (
    <section id="education" className="education">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2>Education & Learning</h2>
          <p>Academic background and continuous learning journey</p>
        </motion.div>

        <div className="education-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="education-main"
          >
            <div className="education-card">
              <div className="education-icon">
                <FaGraduationCap />
              </div>
              <div className="education-info">
                <h3>{education.degree}</h3>
                <p className="education-institution">
                  <FaUniversity /> {education.university}
                </p>
                <p className="education-period">
                  <FaCalendar /> {education.period}
                </p>
                <p className="education-details">{education.details}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="education-side"
          >
            <div className="certifications">
              <h4>Certifications & Courses</h4>
              <div className="certifications-list">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="certification-item"
                  >
                    <span className="cert-badge">✓</span>
                    {cert}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="upskilling">
              <h4>Currently Upskilling</h4>
              <div className="skills-list">
                {upskilling.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="skill-item"
                  >
                    <span className="skill-progress"></span>
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;