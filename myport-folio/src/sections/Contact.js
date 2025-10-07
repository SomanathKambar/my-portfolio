import  { useState } from 'react';
import { usePortfolioData } from '../hooks/usePortfolioData';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { updateContactForm } from '../store/portfolioSlice';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const data = usePortfolioData();
  const { contactForm } = useSelector(state => state.portfolio);
  const dispatch = useDispatch();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!data) return null;

  const { personalInfo } = data;

  const handleInputChange = (field, value) => {
    dispatch(updateContactForm({ [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        dispatch(updateContactForm({ name: '', email: '', message: '' }));
      }, 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2>Get In Touch</h2>
          <p>I'm always open to discussing new opportunities and interesting projects</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="contact-info"
          >
            <h3>Let's Connect</h3>
            <p>
              I'm currently available for new opportunities and would love to hear from you.
              Whether you have a project in mind or just want to say hello, feel free to reach out!
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <FaLinkedin />
                </div>
                <div className="contact-details">
                  <h4>LinkedIn</h4>
                  <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/somanath-kambar
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <FaGithub />
                </div>
                <div className="contact-details">
                  <h4>GitHub</h4>
                  <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer">
                    github.com/SomanathKambar
                  </a>
                </div>
              </div>
            </div>

            <div className="availability-badge">
              <span className="status-dot"></span>
              {personalInfo.availability}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="contact-form-container"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="success-message"
              >
                <h3>Thank You! 🎉</h3>
                <p>Your message has been sent successfully. I'll get back to you soon!</p>
              </motion.div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={contactForm.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    placeholder="Your Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={contactForm.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    value={contactForm.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                    placeholder="Tell me about your project or just say hello..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;