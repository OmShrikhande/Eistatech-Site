import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-brand">EISTATECH</p>
          <p>Providing innovative automation solutions.</p>
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
        <p>&copy; 2025 EISTATECH. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;