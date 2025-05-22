import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

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
          <li><a href="#inicio" onClick={handleLinkClick}>Inicio</a></li>
          <li><a href="#galeria" onClick={handleLinkClick}>Galería</a></li>
          <li><a href="#servicios" onClick={handleLinkClick}>Servicios</a></li>
          <li><a href="#agendar" onClick={handleLinkClick}>Agendar</a></li>
          <li><a href="#contacto" onClick={handleLinkClick}>Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
