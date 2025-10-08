import  { useState } from 'react';
import { usePortfolioData } from '../hooks/usePortfolioData';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { updateContactForm } from '../store/portfolioSlice';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaCalendarAlt, FaClock } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const data = usePortfolioData();
  const { contactForm } = useSelector(state => state.portfolio);
  const dispatch = useDispatch();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [projectType, setProjectType] = useState('');
  const [submitError, setSubmitError] = useState('');

  // Get EmailJS configuration from environment variables
  const emailjsConfig = {
    serviceID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
    templateID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  };

  if (!data) return null;

  const { personalInfo } = data;

  const projectTypes = [
    'Android App Development',
    'App Migration/Modernization', 
    'UI/UX Implementation',
    'API Integration',
    'Code Review',
    'Other'
  ];

  const handleInputChange = (field, value) => {
    dispatch(updateContactForm({ [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    // Validate that environment variables are set
    if (!emailjsConfig.serviceID || !emailjsConfig.templateID || !emailjsConfig.publicKey) {
      console.error('EmailJS configuration missing. Please check your environment variables.');
      setSubmitError('Configuration error. Please contact the site administrator.');
      setIsSubmitting(false);
      return;
    }

    // Combine all project details into one message for the email template
    const combinedMessage = `
PROJECT INQUIRY DETAILS:

Name: ${contactForm.name}
Email: ${contactForm.email}
Company: ${contactForm.company || 'Not specified'}
Project Budget: ${contactForm.budget || 'Not specified'}
Project Type: ${projectType}

PROJECT DESCRIPTION:
${contactForm.message}

Submitted: ${new Date().toLocaleString()}
    `.trim();

    // Prepare template parameters matching EXACTLY your template variable names
    const templateParams = {
      name: contactForm.name,
      time: new Date().toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      message: combinedMessage
    };

    try {
      const result = await emailjs.send(
        emailjsConfig.serviceID, 
        emailjsConfig.templateID, 
        templateParams, 
        emailjsConfig.publicKey
      );
      
      console.log('Email sent successfully:', result);
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
        dispatch(updateContactForm({ 
          name: '', 
          email: '', 
          message: '',
          company: '',
          budget: ''
        }));
        setProjectType('');
      }, 5000);
      
    } catch (error) {
      console.error('Failed to send email:', error);
      console.error('Failed to send email:', emailjsConfig);
      setIsSubmitting(false);
      setSubmitError('Failed to send message. Please try again or contact me directly via email.');
    }
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
          <h2>Let's Work Together</h2>
          <p>Ready to start your next project? Get in touch for a free consultation</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="contact-info"
          >
            <h3>Start Your Project</h3>
            <p>
              I'm currently available for new projects and would love to discuss 
              how we can work together to bring your ideas to life.
            </p>

            <div className="contact-methods">
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
                  <FaPhone />
                </div>
                <div className="contact-details">
                  <h4>Phone/WhatsApp</h4>
                  <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <FaLinkedin />
                </div>
                <div className="contact-details">
                  <h4>LinkedIn</h4>
                  <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer">
                    Connect with me
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <FaCalendarAlt />
                </div>
                <div className="contact-details">
                  <h4>Response Time</h4>
                  <span>Within 24 hours</span>
                </div>
              </div>
            </div>

            <div className="freelance-info">
              <h4>Why Work With Me?</h4>
              <ul>
                <li>7+ Years Android Experience</li>
                <li>Clean, Maintainable Code</li>
                <li>On-Time Delivery</li>
                <li>Regular Communication</li>
                <li>Post-Launch Support</li>
              </ul>
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
                <p>Your message has been sent successfully. I'll get back to you within 24 hours!</p>
              </motion.div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="error-message"
                  >
                    {submitError}
                  </motion.div>
                )}
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
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
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      value={contactForm.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      value={contactForm.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Your Company (Optional)"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="budget">Project Budget</label>
                    <select
                      id="budget"
                      value={contactForm.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                    >
                      <option value="">Select Budget Range</option>
                      <option value="<₹5k">Less than ₹ 5,000</option>
                      <option value="₹5k-₹29k">₹5,000 - ₹29,000</option>
                      <option value="₹30k-₹75k">₹30,000 - ₹75,000</option>
                      <option value="₹100k+">₹1,00,000 + </option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="projectType">Project Type *</label>
                  <select
                    id="projectType"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    required
                  >
                    <option value="">What type of project?</option>
                    {projectTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    rows="6"
                    value={contactForm.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                    placeholder="Tell me about your project requirements, timeline, and any specific features you need..."
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
                      <FaPaperPlane /> Send Project Inquiry
                    </>
                  )}
                </button>
                
                <p className="form-note">
                  I typically respond within 24 hours. Your information is secure and confidential.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;