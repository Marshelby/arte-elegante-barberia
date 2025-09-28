import React from 'react';
import './Galeria.css';

/* ========== Farol clásico (luces) – mismo de Servicios ========== */
const BarberPole = () => (
  <div className="barber-pole" aria-hidden="true">
    <div className="bp-cap bp-cap--top" />
    <div className="bp-tube">
      <div className="bp-stripes" />
      <div className="bp-gloss" />
    </div>
    <div className="bp-cap bp-cap--bottom" />
  </div>
);

const imagenes = [
  { src: '/img/corte1.png',  alt: "Diseño con letras 'Arte Elegante' en corte degradado – Barbería en Quilpué" },
  { src: '/img/corte2.png',  alt: "Degradado bajo con diseño de líneas en el lateral – Estilo urbano" },
  { src: '/img/corte3.png',  alt: "Fade medio limpio en la nuca – Transición suave y prolija" },
  { src: '/img/corte4.png',  alt: "Degradado alto con barba perfilada – Contorno definido" },
  { src: '/img/corte5.png',  alt: "Diseño curvo en el lateral sobre fade – Corte creativo" },
  { src: '/img/corte6.png',  alt: "Diseño de estrella en el lateral con degradado – Corte artístico" },
  { src: '/img/corte7.png',  alt: "Diseño de rayos en el lateral con fade – Estilo marcado" },
  { src: '/img/corte8.png',  alt: "Fade bajo con peinado hacia atrás – Acabado con volumen" },
  { src: '/img/corte9.png',  alt: "Diseño floral/abstracto en el lateral sobre degradado – Detalle fino" },
  { src: '/img/corte10.png', alt: "Degradado medio con peinado slick back – Terminación pulida" },
];

const Galeria = () => (
  <section id="galeria" className="galeria-section">
    <div className="galeria-titulo-wrap">
      <BarberPole />
      <h2 className="galeria-titulo">Galería de Estilos</h2>
      <BarberPole />
    </div>

    <p className="galeria-subtitulo">Algunos de nuestros mejores trabajos realizados</p>

    <div className="galeria-grid">
      {imagenes.map(({ src, alt }, idx) => (
        <figure className="galeria-item" key={idx}>
          <img
            src={src}
            alt={alt}
            loading="lazy"
            width="800"
            height="500"
          />
          <figcaption className="galeria-texto">Estilo {idx + 1}</figcaption>
        </figure>
      ))}
    </div>
  </section>
);

export default Galeria;
