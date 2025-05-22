import React from 'react';
import './Galeria.css';

const imagenes = [
  '/img/corte1.png',
  '/img/corte2.png',
  '/img/corte3.png',
  '/img/corte4.png',
  '/img/corte5.png',
  '/img/corte6.png',
];

const Galeria = () => (
  <section id="galeria" className="galeria-section">
    <h2 className="galeria-titulo">Galería de Estilos</h2>
    <p className="galeria-subtitulo">Algunos de nuestros mejores trabajos realizados</p>
    <div className="galeria-grid">
      {imagenes.map((src, idx) => (
        <div className="galeria-item" key={idx}>
          <img src={src} alt={`Estilo ${idx + 1}`} />
        </div>
      ))}
    </div>
  </section>
);

export default Galeria;
