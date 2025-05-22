import React from 'react';
import './Home.css';

function Home() {
  return (
    <main>
      {/* INICIO */}
      <section id="inicio" className="home-container">
        <header className="hero">
          <h1>Arte Elegante Barbershop</h1>
          <p>Transformamos estilo con precisión y carácter.</p>
          <a href="https://wa.me/56937711681" target="_blank" className="cta-button" rel="noreferrer">
            Agendar Cita
          </a>
        </header>
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="section">
        <h2>Galería de Estilos</h2>
        <p>Aquí pronto mostraremos algunos de nuestros mejores trabajos.</p>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="section">
        <h2>Servicios</h2>
        <ul>
          <li>Corte de cabello</li>
          <li>Perfilado de barba</li>
          <li>Diseños especiales</li>
          <li>Combo corte + barba</li>
        </ul>
      </section>

      {/* AGENDAR */}
      <section id="agendar" className="section">
        <h2>Agenda tu cita</h2>
        <p>Haz clic en el botón para agendar directamente por WhatsApp.</p>
        <a href="https://wa.me/56937711681" target="_blank" className="cta-button" rel="noreferrer">
          Agendar por WhatsApp
        </a>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="section">
        <h2>Contacto</h2>
        <p>Dirección: Av Palmas 2108, Los Pinos, Quilpué</p>
        <p>Teléfono: +56 9 3771 1681</p>
        <p>Instagram: @arteelegantebarbershop</p>
      </section>
    </main>
  );
}

export default Home;
