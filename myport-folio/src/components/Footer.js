import { FaHeart } from 'react-icons/fa';
import {  FaBrain, FaToolbox } from 'react-icons/fa6'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <p className="footer-text">
        
          Made with{" "}  <FaBrain/> <FaToolbox/> <FaHeart/>  </p>
          <p>
          by Somanath Kambar &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;