
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveSection } from '../store/portfolioSlice';
import { motion } from 'framer-motion';

const Header = () => {
  const { activeSection } = useSelector(state => state.portfolio);
  const dispatch = useDispatch();

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPos = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          dispatch(setActiveSection(sectionId));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 70; // Adjust for header height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="header"
    >
      <nav className="nav">
        <motion.div 
          className="nav-brand"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Somanath</span>
        </motion.div>
        <ul className="nav-links">
          {sections.map((section) => (
            <li key={section.id}>
              <motion.button
                className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => scrollToSection(section.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.label}
              </motion.button>
            </li>
          ))}
        </ul>
        
        <div className="mobile-menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;