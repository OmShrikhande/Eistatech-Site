import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/EISTATECH_BG.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <img src={logo} alt="Eistatech" className="logo-image" />
          </Link>

          <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><NavLink to="/" end onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
            <li><NavLink to="/services" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>Services</NavLink></li>
            <li><NavLink to="/product" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>Product</NavLink></li>
            <li><NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>About us</NavLink></li>
            <li><NavLink to="/portfolio" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>Portfolio</NavLink></li>
            <li><NavLink to="/team" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>Team</NavLink></li>
            <li><NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink></li>
          </ul>

          <div className="navbar-right">
            <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Menu">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;