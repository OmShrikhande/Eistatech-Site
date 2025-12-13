import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3>Eistatech</h3>
          <p>Providing innovative automation solutions.</p>
          <div className="contact-info">
            <p>Email: eistatechofficial@gmail.com</p>
            <p>Phone: +91 70589 72300</p>
          </div>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Eistatech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;