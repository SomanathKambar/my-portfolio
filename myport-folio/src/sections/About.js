import { usePortfolioData } from '../hooks/usePortfolioData';
import { motion } from 'framer-motion';
import { FaAndroid, FaUsers, FaRocket, FaBriefcase, FaCode, FaGraduationCap } from 'react-icons/fa';

const About = () => {
  const data = usePortfolioData();

  if (!data) return null;

  const { personalInfo, upskilling } = data;

  const stats = [
    { icon: <FaBriefcase />, label: "Years Experience", value: personalInfo.stats.experience },
    { icon: <FaRocket />, label: "Projects Completed", value: personalInfo.stats.projects },
    { icon: <FaAndroid />, label: "Apps Developed", value: personalInfo.stats.apps },
    { icon: <FaUsers />, label: "Team Members Mentored", value: personalInfo.stats.mentored }
  ];

  // Dynamic skills that wrap properly
  const keySkills = [
    "Kotlin", "Java", "Android SDK", "Jetpack Compose", "MVVM", 
    "Clean Architecture", "REST API", "Firebase", "Room DB", "Dagger Hilt",
    "Coroutines", "Flow", "gRPC", "Material Design", "Git", "CI/CD"
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
          <p>7+ years of crafting exceptional mobile experiences</p>
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
              I'm a Senior Android Developer with over 7 years of experience creating 
              innovative mobile applications. My expertise spans across Kotlin, Java, 
              and modern Android development practices including Jetpack Compose, 
              Clean Architecture, and MVVM pattern.
            </p>
            <p>
              Throughout my career, I've successfully delivered 50+ projects and 
              20+ production applications, working with startups and enterprises 
              across various domains including POS systems, Android TV applications, 
              AI-powered tools, and subscription-based platforms.
            </p>
            <p>
              I'm passionate about mentoring and have guided 10+ developers in 
              their Android development journey, focusing on best practices and 
              career growth.
            </p>

            {/* Dynamic Skills Badges */}
            <div className="skills-showcase">
              <h4>Core Technologies</h4>
              <div className="skills-badges">
                {keySkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="skill-badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

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
            <div className="employment-types">
              <h4>Available For</h4>
              <div className="type-badges">
                {personalInfo.employmentTypes.map((type, index) => (
                  <span key={index} className="type-badge">
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div className="learning-section">
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
                    <span className="learning-badge">
                      <FaCode />
                    </span>
                    {skill}
                  </motion.div>
                ))}
              </div>
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