import React from 'react';
import './Confianza.css';

const testimonios = [
  { nombre: 'Cristóbal', texto: 'Salí impecable. Detalle y buena conversación.', base: 'testimonio1' },
  { nombre: 'Valentina', texto: 'Llevé a mi hijo, quedaron perfectos los degradés.', base: 'testimonio2' },
];

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

/* Medalla con brillo – tamaño controlado por el wrapper */
const MedalIcon = () => (
  <span className="medal-wrapper" aria-hidden="true">
    <svg
      className="medal-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      width="40"
      height="40"
    >
      <path
        fill="currentColor"
        d="M400 0H176L96 160h384L400 0zm176 208c0 97.2-78.8 176-176 176s-176-78.8-176-176 78.8-176 176-176 176 78.8 176 176zM352 96v64h-32V96h32zm-40 208h48c8.8 0 16-7.2 16-16V224h-32v64h-32v16zm144 0v-16h-32v-64h-32v64c0 8.8 7.2 16 16 16h48zm-88-32V96h-32v176h32zm-88-32h32v-64h-32v64z"
      />
    </svg>
    <span className="medal-shine" />
  </span>
);

const Confianza = () => (
  <section id="confianza" className="confianza-section">
    <div className="confianza-title-wrap">
      <MedalIcon />
      <h2 className="confianza-titulo">Lo que dicen nuestros clientes</h2>
      <MedalIcon />
    </div>

    <p className="confianza-subtitulo">Experiencias reales en Arte Elegante Barbershop</p>

    <div className="confianza-icons">
      <div className="confianza-pill"><Icon.Clean /> Higiene impecable</div>
      <div className="confianza-pill"><Icon.Time /> Puntualidad</div>
      <div className="confianza-pill"><Icon.Pro /> Profesionalismo</div>
    </div>

    <div className="confianza-grid">
      {testimonios.map((t, idx) => (
        <div className="confianza-card" key={idx}>
          <div className="confianza-img-container">
            <picture>
              <source srcSet={`/img/${t.base}.avif`} type="image/avif" />
              <source srcSet={`/img/${t.base}.webp`} type="image/webp" />
              <img
                src={`/img/${t.base}.png`}
                alt={`Foto de ${t.nombre} – Cliente de Arte Elegante`}
                className="confianza-img"
                loading="lazy"
                width="200"
                height="200"
              />
            </picture>
          </div>
          <p className="confianza-texto">“{t.texto}”</p>
          <p className="confianza-nombre">— {t.nombre}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Confianza;
