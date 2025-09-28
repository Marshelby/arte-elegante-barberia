import React from 'react';
import './Hero.css';

const onHeroCTA = () => {
  if (window.gtag) window.gtag('event', 'click_whatsapp', { location: 'hero_cta' });
  if (window.fbq) window.fbq('trackCustom', 'ClickWhatsApp', { location: 'hero_cta' });
};

const Hero = () => {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-content">
        {/* TIP: si quieres probar el modo que intenta “quitar” el negro del logo,
           agrega la clase extra 'hero-logo--knockout' al <img> de abajo. */}
        <picture>
          <source srcSet="/img/logo-arte-elegante.webp" type="image/webp" />
          <img
            src="/img/logo-arte-elegante.png"
            alt="Logo Arte Elegante Barbería"
            className="hero-logo"
            width="600"
            height="600"
            loading="eager"
          />
        </picture>

        <h1>Arte Elegante Barbershop</h1>
        <p>Barbería en Quilpué, especialistas en fades, diseños y barbería masculina.</p>

        <a
          href="https://wa.me/56937711681?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20en%20Arte%20Elegante%20Barbershop%20✂️"
          target="_blank"
          rel="noreferrer"
          className="cta-button"
          onClick={onHeroCTA}
        >
          Reserva tu hora por WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Hero;
