import React from 'react';
import './Hero.css';

const Hero = () => (
  <section id="inicio" className="hero-section">
    <div className="hero-content">
      <div className="hero-icon">✂</div>
      <h1>Arte Elegante Barbershop</h1>
      <p>Donde el estilo se transforma en carácter.</p>
      <a
        href="https://wa.me/56937711681?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20un%20corte%20en%20Arte%20Elegante%20Barbershop%20%F0%9F%93%8D"
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
