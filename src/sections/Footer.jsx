import React from 'react';
import './Footer.css';

const Footer = () => {
  const año = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-contenido">
        <h3>Arte Elegante Barbershop</h3>
        <p className="footer-frase">Más que un buen corte, una experiencia.</p>

        <ul className="footer-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#galeria">Galería</a></li>
          <li><a href="#agendar">Agendar</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>

        <div className="footer-sociales">
          <a href="https://wa.me/56937711681" target="_blank" rel="noreferrer">📲</a>
          <a href="https://www.instagram.com/arteelegantebarbershop" target="_blank" rel="noreferrer">📸</a>
        </div>

        <p className="footer-copy">© {año} Arte Elegante. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
