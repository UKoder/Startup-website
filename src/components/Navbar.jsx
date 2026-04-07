import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <nav className={`navbar z-50 transition-all ${isScrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="logo">
        Nexis<span className="accent-text">.</span>
      </div>
      
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#solutions" onClick={closeMenu}>Solutions</a>
        <a href="#team" onClick={closeMenu}>Team</a>
        <a href="#contact" className="btn btn-outline" onClick={closeMenu}>Contact Us</a>
      </div>

      <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar transition-all"></div>
        <div className="bar transition-all"></div>
        <div className="bar transition-all"></div>
      </div>
    </nav>
  );
};

export default Navbar;
