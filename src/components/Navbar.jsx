import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const handleToggle = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'galeria', 'servicios', 'agendar', 'contacto'];
      const scrollPosition = window.scrollY + 120;

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPosition && el.offsetTop + el.offsetHeight > scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Inicializa estado al cargar
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          💈 <span>Arte Elegante Barbershop</span>
        </div>

        <div className="menu-toggle" onClick={handleToggle}>
          ☰
        </div>

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
