import React from 'react';
import './Hero.css';

const Hero = () => (
  <section id="inicio" className="hero-section">
    <div className="hero-content">
      <div className="hero-icon">✂</div>
      <h1>Arte Elegante Barbershop</h1>
      <p>Donde el estilo se transforma en carácter.</p>
      <a
        href="https://wa.me/56937711681?text=Hola,%20quiero%20agendar%20un%20corte%20con%20Arte%20Elegante%20Barbershop."
        target="_blank"
        rel="noreferrer"
        className="cta-button"
      >
        Agendar Cita
      </a>
    </div>
  </section>
);

export default Hero;
