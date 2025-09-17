import React from 'react';
import './Confianza.css';

const testimonios = [
  {
    nombre: "Cristóbal",
    texto: "Salí impecable. Detalle y buena conversación.",
    img: "/img/testimonio1.png", // ← futuro cliente (placeholder por ahora)
  },
  {
    nombre: "Valentina",
    texto: "Llevé a mi hijo, quedaron perfectos los degradés.",
    img: "/img/testimonio2.png", // ← futuro cliente (placeholder por ahora)
  },
];

const Confianza = () => (
  <section id="confianza" className="confianza-section">
    <h2 className="confianza-titulo">Lo que dicen nuestros clientes</h2>
    <p className="confianza-subtitulo">Experiencias reales en Arte Elegante Barbershop</p>

    <div className="confianza-grid">
      {testimonios.map((t, idx) => (
        <div className="confianza-card" key={idx}>
          <div className="confianza-img-container">
            <img
              src={t.img}
              alt={`Foto de ${t.nombre} – Cliente de Arte Elegante`}
              className="confianza-img"
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
