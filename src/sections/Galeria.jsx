import React from 'react';
import './Galeria.css';

const imagenes = [
  '/img/corte1.png', // se mantiene
  '/img/corte2.png', // reemplazada
  '/img/corte3.png', // reemplazada
  '/img/corte4.png', // reemplazada
  '/img/corte5.png', // reemplazada
  '/img/corte6.png', // reemplazada
  '/img/corte7.png', // nueva
  '/img/corte8.png', // nueva
  '/img/corte9.png', // nueva
  '/img/corte10.png', // nueva
];

const Galeria = () => (
  <section id="galeria" className="galeria-section">
    <h2 className="galeria-titulo">Galería de Estilos</h2>
    <p className="galeria-subtitulo">Algunos de nuestros mejores trabajos realizados</p>
    <div className="galeria-grid">
      {imagenes.map((src, idx) => (
        <div className="galeria-item" key={idx}>
          <img src={src} alt={`Estilo ${idx + 1}`} loading="lazy" />
          <p className="galeria-texto">Estilo {idx + 1}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Galeria;
