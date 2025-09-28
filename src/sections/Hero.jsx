import React from 'react';
import './Hero.css';

/* ========== Farol clásico (luces) – igual al de Galería ========== */
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

const Hero = () => {
  const wspHref =
    'https://wa.me/56937711681?text=' +
    encodeURIComponent(
      'Hola, me gustaría agendar un corte en Arte Elegante Barbershop. ¿Tienen disponibilidad esta semana?'
    );

  return (
    <header id="inicio" className="hero">
      <div className="hero-inner">
        {/* Logo */}
        <div className="hero-logo">
          <picture>
            <source
              srcSet="/img/logo-arte-elegante-transparent.webp"
              type="image/webp"
            />
            <img
              src="/img/logo-arte-elegante-transparent.png"
              alt="Logo Arte Elegante Barbershop"
              width="540"
              height="540"
              loading="eager"
              decoding="async"
            />
          </picture>
        </div>

        {/* Título con luces */}
        <div className="hero-title-wrap">
          <BarberPole />
          <h1 className="hero-title">Arte Elegante Barbershop</h1>
          <BarberPole />
        </div>

        {/* Subtítulo */}
        <p className="hero-subtitle">
          Barbería en Quilpué, especialistas en fades, diseños y barbería
          masculina.
        </p>

        {/* Botón dorado */}
        <a
          href={wspHref}
          className="hero-cta hero-cta--gold"
          target="_blank"
          rel="noreferrer noopener"
        >
          Reserva tu hora por WhatsApp
        </a>
      </div>
    </header>
  );
};

export default Hero;
