
import { usePortfolioData } from '../hooks/usePortfolioData';
import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaPaintBrush, FaServer, FaCheckCircle } from 'react-icons/fa';

const Services = () => {
  const data = usePortfolioData();

  if (!data) return null;

  const { services } = data;

  const serviceIcons = {
    "Android App Development": FaMobile,
    "App Migration & Modernization": FaCode,
    "UI/UX Implementation": FaPaintBrush,
    "API Integration & Backend": FaServer
  };

  return (
    <section id="services" className="services">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2>My Services</h2>
          <p>Comprehensive Android development solutions for your business</p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = serviceIcons[service.title] || FaCode;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="service-card"
              >
                <div className="service-icon">
                  <IconComponent />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <FaCheckCircle className="feature-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="service-cta">
                  <a href="#contact" className="btn btn-outline btn-sm">
                    Discuss Project
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="services-cta"
        >
          <div className="cta-content">
            <h3>Ready to start your project?</h3>
            <p>Let's discuss your requirements and build something amazing together</p>
            <div className="cta-actions">
              <a href="#contact" className="btn btn-primary">Get Free Consultation</a>
              <a href="#projects" className="btn btn-secondary">View Portfolio</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;