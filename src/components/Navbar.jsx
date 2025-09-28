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
            <source srcSet="/img/logo-arte-elegante-navbar.webp" type="image/webp" />
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

        {/* Redes sociales */}
        <div className="navbar-socials">
          <a
            href="https://www.instagram.com/arte.elegante.barberia"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram Arte Elegante"
            className="social-link instagram"
          >
            {/* Ícono Instagram */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M224,202a53,53,0,1,0,53,53A53,53,0,0,0,224,202Zm124-41a54,54,0,0,0-54-54H154a54,54,0,0,0-54,54v140a54,54,0,0,0,54,54h140a54,54,0,0,0,54-54Zm48-41v224a102,102,0,0,1-102,102H154A102,102,0,0,1,52,344V120A102,102,0,0,1,154,18H294A102,102,0,0,1,396,120ZM336,68a20,20,0,1,0,20,20A20,20,0,0,0,336,68Z" fill="currentColor"/>
            </svg>
          </a>
          <a
            href="https://wa.me/56937711681"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="WhatsApp Arte Elegante"
            className="social-link whatsapp"
          >
            {/* Ícono WhatsApp */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M380.9 97.1C339-9.5 208.1-32 125.2 40.6 47.5 106.2 36.2 228.7 96 311.1L80 432l118.1-30.1c70.6 39.3 160.2 24.6 217.3-35.1 60.1-62.5 53.4-163.1-10.5-220.7zM256.6 338c-49.6 0-98.2-19.3-134.3-54.5-36.1-35.2-56-81.7-56-131.3 0-49.6 19.9-96.1 56-131.3C158.3-2.7 222.9-2.7 278.9 53c56 55.7 56 145.6 0 201.3-25.9 25.9-60 39.7-96.3 39.7z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
