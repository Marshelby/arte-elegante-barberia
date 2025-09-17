import React from 'react';
import './Hero.css';

const Hero = () => (
  <section id="inicio" className="hero-section">
    <div className="hero-overlay" />
    <div className="hero-content">
      <img
        src="/img/logo-arte-elegante.png"
        alt="Logo Arte Elegante Barbería"
        className="hero-logo"
      />
      <h1>Arte Elegante Barbershop</h1>
      <p>Barbería en Quilpué, especialistas en fades, diseños y barbería masculina.</p>
      <a
        href="https://wa.me/56937711681?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20en%20Arte%20Elegante%20Barbershop%20✂️"
        target="_blank"
        rel="noreferrer"
        className="cta-button"
      >
        Reserva tu hora por WhatsApp
      </a>
    </div>
  </section>
);

export default Hero;
