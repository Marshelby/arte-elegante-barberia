import React from 'react';
import './Home.css';

function Home() {
  return (
    <main className="home-container">
      <header className="hero">
        <h1>Arte Elegante Barbershop</h1>
        <p>Transformamos estilo con precisión y carácter.</p>
        <a href="https://wa.me/56937711681" target="_blank" className="cta-button" rel="noreferrer">
          Agendar Cita
        </a>
      </header>
    </main>
  );
}

export default Home;
