import React from 'react';
import './Servicios.css';

/* ========== Farol clásico (luces) ========== */
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

/* ========== Ícono genérico SVG ========== */
const IconSVG = ({ name, alt }) => (
  <img
    src={`/img/icons/${name}.svg`}
    alt={alt}
    className="icono-svg"
    width="64"
    height="64"
    loading="lazy"
  />
);

/* ========== Datos (ya sin emojis) ========== */
const servicios = [
  { nombre: 'Corte con shaver', icono: 'clipper', precio: '$10.000' },
  { nombre: 'Corte clásico',   icono: 'scissors', precio: '$8.000' },
  { nombre: 'Corte degradado', icono: 'fade',     precio: '$9.000' },
  { nombre: 'Cejas',           icono: 'eyebrow',  precio: '$2.000' },
  { nombre: 'Barba',           icono: 'beard',    precio: '$6.000' },
];

const whatsappURL = (servicio) =>
  `https://wa.me/56937711681?text=${encodeURIComponent(
    `Hola, me gustaría agendar el servicio: ${servicio}`
  )}`;

const trackServicio = (nombre) => {
  if (window.gtag) window.gtag('event', 'booking_interest', { service_name: nombre });
  if (window.fbq) window.fbq('trackCustom', 'BookingInterest', { service_name: nombre });
};

const Servicios = () => (
  <section id="servicios" className="servicios-section">
    <div className="servicios-titulo-wrap">
      <BarberPole />
      <h2 className="servicios-titulo" role="heading" aria-level={2}>
        Servicios
      </h2>
      <BarberPole />
    </div>

    <p className="servicios-subtitulo">
      Experimenta el estilo y el cuidado personalizado que mereces
    </p>

    <div className="servicios-grid">
      {servicios.map((s, idx) => (
        <div key={idx} className="servicio-card">
          <div className="servicio-icono" aria-hidden="true">
            <IconSVG name={s.icono} alt={s.nombre} />
          </div>

          <h3>{s.nombre}</h3>
          <p className="servicio-precio">{s.precio}</p>

          <a
            href={whatsappURL(s.nombre)}
            target="_blank"
            rel="noreferrer"
            className="servicio-agendar"
            onClick={() => trackServicio(s.nombre)}
          >
            Agendar este
          </a>
        </div>
      ))}
    </div>

    <p className="servicio-regalo">
      🎁 Todos los servicios incluyen limpieza facial gratuita
    </p>
  </section>
);

export default Servicios;
