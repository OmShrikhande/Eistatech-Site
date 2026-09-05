import { Link } from 'react-router-dom';
import birdLogo from '../assets/bird_logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand-wrap">
            <Link to="/" className="footer-logo-link" title="Eistatech Pvt Ltd">
              <img src={birdLogo} alt="Eistatech Bird Logomark" className="footer-bird-logo" />
            </Link>
            <div className="footer-brand-text">
              <p className="footer-brand">EISTATECH PVT. LTD.</p>
              <p className="footer-tagline">Innovating with IoT, AI/ML & Automation Solutions.</p>
            </div>
          </div>
          <div className="contact-info">
            <p>Email: eistatechofficial@gmail.com</p>
            <p>Phone: +91 70589 72300</p>
          </div>
        </div>
        <div className="footer-links">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://www.instagram.com/eista_tech" target="_blank" rel="noreferrer">
              <img src="/insta.ico" alt="Instagram" className="social-icon" />
              Instagram
            </a>
            <a href="https://www.linkedin.com/company/eistatech" target="_blank" rel="noreferrer">
              <img src="/linkedin.ico" alt="LinkedIn" className="social-icon" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Eistatech Private Limited. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;