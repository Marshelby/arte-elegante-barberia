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

    <div className="video-section">
      <h3 className="video-titulo">Presentación Arte Elegante</h3>
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/YTu8J2L7Qfc"
          title="Presentación Barbería"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </section>
);

export default Galeria;
