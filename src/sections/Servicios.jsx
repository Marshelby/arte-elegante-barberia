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

/* ========== Ícono/imagen de Cejas con fallback WebP → PNG ========== */
const CejasIcon = () => {
  return (
    <picture>
      <source srcSet="/img/cejas.webp" type="image/webp" />
      <img
        src="/img/cejas.png"
        alt="Cejas"
        className="icono-img"
        width="64"
        height="64"
        loading="lazy"
      />
    </picture>
  );
};

/* ========== Datos ========== */
const servicios = [
  { nombre: 'Corte con shaver', icono: '💈', precio: '$10.000' },
  { nombre: 'Corte clásico', icono: '💇‍♂️', precio: '$8.000' },
  { nombre: 'Corte degradado', icono: '🔥', precio: '$9.000' },
  { nombre: 'Cejas', icono: 'cejas', precio: '$2.000' },
  { nombre: 'Barba', icono: '🧔', precio: '$6.000' },
];

const whatsappURL = (servicio) =>
  `https://wa.me/56937711681?text=${encodeURIComponent(
    `Hola, me gustaría agendar el servicio: ${servicio}`
  )}`;

const trackServicio = (nombre) => {
  if (window.gtag) window.gtag('event', 'booking_interest', { service_name: nombre });
  if (window.fbq) window.fbq('trackCustom', 'BookingInterest', { service_name: nombre });
};

/* ========== Vista ========== */
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
          <div className="servicio-icono" aria-hidden={s.icono !== 'cejas'}>
            {s.icono === 'cejas' ? <CejasIcon /> : s.icono}
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
