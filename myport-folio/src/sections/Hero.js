import { usePortfolioData } from '../hooks/usePortfolioData';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium, FaStackOverflow, FaDownload } from 'react-icons/fa';

const Hero = () => {
  const data = usePortfolioData();

  if (!data) return null;

  const { personalInfo } = data;

  
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
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

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="hero-availability"
            >
              {personalInfo.availability}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="hero-social"
            >
              <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href={personalInfo.social.medium} target="_blank" rel="noopener noreferrer" aria-label="Medium">
                <FaMedium />
              </a>
              <a href={personalInfo.social.stackoverflow} target="_blank" rel="noopener noreferrer" aria-label="StackOverflow">
                <FaStackOverflow />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="hero-actions"
            >
              <div className="hero-actions">
  <a href="#contact" className="btn btn-primary">Get In Touch</a>
  <a href="#projects" className="btn btn-secondary">View My Work</a>
  <button className="btn btn-outline" onClick={() => window.print()}>
    <FaDownload /> Download Resume
  </button>
</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-visual"
          >
            <div className="code-window">
              <div className="window-header">
                <div className="window-controls">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="code-content">
                <pre>
{`class SomanathKambar {
  val title = "Software Engineer"
  val role = "Android Developer (Mobile, TV, Tablet)/ Web  "
  val experience = "7+ years"
  val specialization = listOf(
    "Kotlin", "Java", "Jetpack Compose",
    "Clean Architecture", "MVVM", "React", "React Native"
  )
  val availability = "Immediately"

  fun buildAwesomeApps() {
    // Creating Innovative Software Solutions
  }
}`}
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;