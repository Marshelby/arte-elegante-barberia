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

/* ========== Icono SVG de archivo (shaver / tijeras) ========== */
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

/* ========== Emblemas tipográficos (claridad inmediata) ========== */
/* Todos comparten tamaño y dorado; cada uno agrega un trazo sutil que sugiere el servicio. */
const TypoEmblem = ({ label, variant }) => {
  return (
    <svg
      className="icono-typo"
      viewBox="0 0 64 64"
      aria-label={label}
      role="img"
    >
      {/* círculo guía invisible para centrado (no se pinta) */}
      <g fill="none" stroke="none">
        <circle cx="32" cy="32" r="31" />
      </g>

      {/* Texto principal */}
      <text
        x="32"
        y="35"
        textAnchor="middle"
        fontSize="16"
        fontWeight="700"
        letterSpacing="1.5"
        fill="#D4AF37"
      >
        {label.toUpperCase()}
      </text>

      {/* Rasgos por variante */}
      {variant === 'fade' && (
        <>
          {/* dos barras laterales que “reducen” para sugerir degradado */}
          <rect x="11" y="22" width="6" height="20" fill="#D4AF37" opacity="0.35" rx="1"/>
          <rect x="17.5" y="24" width="5" height="16" fill="#D4AF37" opacity="0.35" rx="1"/>
          <rect x="23" y="26" width="4" height="12" fill="#D4AF37" opacity="0.35" rx="1"/>
          <rect x="37" y="26" width="4" height="12" fill="#D4AF37" opacity="0.35" rx="1"/>
          <rect x="41.5" y="24" width="5" height="16" fill="#D4AF37" opacity="0.35" rx="1"/>
          <rect x="48" y="22" width="6" height="20" fill="#D4AF37" opacity="0.35" rx="1"/>
        </>
      )}

      {variant === 'brows' && (
        <>
          {/* arco superior: ceja */}
          <path
            d="M12 20c6-4 12-6 20-6s14 2 20 6"
            stroke="#D4AF37"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
          />
          {/* dos líneas suaves a modo de párpados */}
          <path d="M18 28c4-2 8-2 12 0" stroke="#D4AF37" strokeWidth="1.8" opacity="0.55" fill="none" />
          <path d="M34 28c4-2 8-2 12 0" stroke="#D4AF37" strokeWidth="1.8" opacity="0.55" fill="none" />
        </>
      )}

      {variant === 'beard' && (
        <>
          {/* contorno inferior tipo barba */}
          <path
            d="M14 40c3 8 10 14 18 14s15-6 18-14"
            stroke="#D4AF37"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />
          {/* bigote sutil debajo del texto */}
          <path
            d="M24 40c3 2 13 2 16 0"
            stroke="#D4AF37"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.85"
            fill="none"
          />
        </>
      )}
    </svg>
  );
};

/* ========== Datos ========== */
const servicios = [
  { nombre: 'Corte con shaver', icono: 'clipper', tipo: 'svg', precio: '$10.000' },
  { nombre: 'Corte clásico',   icono: 'scissors', tipo: 'svg', precio: '$8.000' },
  { nombre: 'Corte degradado', icono: 'FADE',     tipo: 'typo-fade', precio: '$9.000' },
  { nombre: 'Cejas',           icono: 'CEJAS',    tipo: 'typo-brows', precio: '$2.000' },
  { nombre: 'Barba',           icono: 'BARBA',    tipo: 'typo-beard', precio: '$6.000' },
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
          <div className="servicio-icono">
            {s.tipo === 'svg' && <IconSVG name={s.icono} alt={s.nombre} />}
            {s.tipo === 'typo-fade'  && <TypoEmblem label={s.icono} variant="fade"  />}
            {s.tipo === 'typo-brows' && <TypoEmblem label={s.icono} variant="brows" />}
            {s.tipo === 'typo-beard' && <TypoEmblem label={s.icono} variant="beard" />}
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
