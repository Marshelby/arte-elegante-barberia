import React from 'react';
import './Confianza.css';

const testimonios = [
  {
    nombre: "Cristóbal",
    texto: "Salí impecable. Detalle y buena conversación.",
    img: "/img/testimonio1.png", // ← placeholder; luego reemplazas por foto real
  },
  {
    nombre: "Valentina",
    texto: "Llevé a mi hijo, quedaron perfectos los degradés.",
    img: "/img/testimonio2.png", // ← placeholder; luego reemplazas por foto real
  },
];

// Mini íconos SVG dorados
const Icon = {
  Clean: () => (
    <svg viewBox="0 0 24 24" className="confianza-ico" aria-hidden="true">
      <path fill="currentColor" d="M12 2l3 6 6 .9-4.5 4.4 1 6.3L12 17l-5.5 2.6 1-6.3L3 8.9 9 8l3-6z"/>
    </svg>
  ),
  Time: () => (
    <svg viewBox="0 0 24 24" className="confianza-ico" aria-hidden="true">
      <path fill="currentColor" d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm1 11h-4V7h2v4h2z"/>
    </svg>
  ),
  Pro: () => (
    <svg viewBox="0 0 24 24" className="confianza-ico" aria-hidden="true">
      <path fill="currentColor" d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zm0 2.3L6 8v8l6 3.2 6-3.2V8l-6-2.7z"/>
    </svg>
  ),
};

const Confianza = () => (
  <section id="confianza" className="confianza-section">
    <h2 className="confianza-titulo">Lo que dicen nuestros clientes</h2>
    <p className="confianza-subtitulo">Experiencias reales en Arte Elegante Barbershop</p>

    {/* Franja de iconos de confianza */}
    <div className="confianza-icons">
      <div className="confianza-pill"><Icon.Clean /> Higiene impecable</div>
      <div className="confianza-pill"><Icon.Time /> Puntualidad</div>
      <div className="confianza-pill"><Icon.Pro /> Profesionalismo</div>
    </div>

    <div className="confianza-grid">
      {testimonios.map((t, idx) => (
        <div className="confianza-card" key={idx}>
          <div className="confianza-img-container">
            <img
              src={t.img}
              alt={`Foto de ${t.nombre} – Cliente de Arte Elegante`}
              className="confianza-img"
              loading="lazy"
            />
          </div>
          <p className="confianza-texto">“{t.texto}”</p>
          <p className="confianza-nombre">— {t.nombre}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Confianza;
