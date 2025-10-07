import { usePortfolioData } from '../hooks/usePortfolioData';
import { motion } from 'framer-motion';

const Skills = () => {
  const data = usePortfolioData();

  if (!data) return null;

  const { skills } = data;

  const skillCategories = Object.entries(skills);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2>Skills & Technologies</h2>
          <p>Comprehensive expertise in modern Android development</p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="skill-category"
            >
              <h3 className="skill-category-title">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h3>
              <div className="skill-items">
                {items.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;