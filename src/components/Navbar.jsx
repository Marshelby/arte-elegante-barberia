import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [scrolled, setScrolled] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      const sections = ['inicio', 'galeria', 'servicios', 'agendar', 'contacto'];
      const scrollPosition = scrollY + 120;

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPosition && el.offsetTop + el.offsetHeight > scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#inicio" className="navbar-brand" onClick={handleLinkClick}>
          <picture>
            {/* principal en WebP transparente */}
            <source srcSet="/img/logo-arte-elegante-navbar.webp" type="image/webp" />
            {/* fallback PNG transparente */}
            <img
              src="/img/logo-arte-elegante-navbar.png"
              alt="Logo Arte Elegante Barbería"
              className="navbar-logo-img"
              width="160"
              height="160"
              loading="eager"
              decoding="async"
            />
          </picture>
          <span className="brand-text">Arte Elegante Barbershop</span>
        </a>

        <button className="menu-toggle" onClick={handleToggle} aria-label="Abrir menú">☰</button>

        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#inicio" onClick={handleLinkClick} className={activeSection === 'inicio' ? 'active' : ''}>Inicio</a></li>
          <li><a href="#galeria" onClick={handleLinkClick} className={activeSection === 'galeria' ? 'active' : ''}>Galería</a></li>
          <li><a href="#servicios" onClick={handleLinkClick} className={activeSection === 'servicios' ? 'active' : ''}>Servicios</a></li>
          <li><a href="#agendar" onClick={handleLinkClick} className={activeSection === 'agendar' ? 'active' : ''}>Agendar</a></li>
          <li><a href="#contacto" onClick={handleLinkClick} className={activeSection === 'contacto' ? 'active' : ''}>Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
