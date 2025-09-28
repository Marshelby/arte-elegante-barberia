import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [scrolled, setScrolled] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      const sections = ['inicio', 'galeria', 'servicios', 'agendar', 'contacto'];
      const scrollPosition = scrollY + 120;

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPosition && el.offsetTop + el.offsetHeight > scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- Tracking helpers (GA4 + Meta Pixel) ---
  const trackSocial = (network, placement) => {
    try {
      if (window.gtag) {
        window.gtag('event', 'click_social', { network, placement, location: 'navbar' });
      }
      if (window.fbq) {
        window.fbq('trackCustom', 'ClickSocial', { network, placement, location: 'navbar' });
      }
    } catch {}
  };

  // WhatsApp con mensaje precargado
  const wspHref =
    'https://wa.me/56937711681?text=' +
    encodeURIComponent(
      'Hola, me gustaría agendar un corte en Arte Elegante Barbershop. ¿Tienen disponibilidad esta semana?'
    );

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#inicio" className="navbar-brand" onClick={handleLinkClick}>
          <picture>
            <source srcSet="/img/logo-arte-elegante-navbar.webp" type="image/webp" />
            <img
              src="/img/logo-arte-elegante-navbar.png"
              alt="Logo Arte Elegante Barbería"
              className="navbar-logo-img"
              width="160"
              height="160"
              loading="eager"
              decoding="async"
            />
          </picture>
          <span className="brand-text">Arte Elegante Barbershop</span>
        </a>

        <button className="menu-toggle" onClick={handleToggle} aria-label="Abrir menú">☰</button>

        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#inicio" onClick={handleLinkClick} className={activeSection === 'inicio' ? 'active' : ''}>Inicio</a></li>
          <li><a href="#galeria" onClick={handleLinkClick} className={activeSection === 'galeria' ? 'active' : ''}>Galería</a></li>
          <li><a href="#servicios" onClick={handleLinkClick} className={activeSection === 'servicios' ? 'active' : ''}>Servicios</a></li>
          <li><a href="#agendar" onClick={handleLinkClick} className={activeSection === 'agendar' ? 'active' : ''}>Agendar</a></li>
          <li><a href="#contacto" onClick={handleLinkClick} className={activeSection === 'contacto' ? 'active' : ''}>Contacto</a></li>

          {/* --- Socials dentro del menú móvil (con rótulo) --- */}
          <li className="navbar-socials-mobile">
            <span className="socials-label">Síguenos</span>
            <a
              href="https://www.instagram.com/arteelegantebarbershop/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram Arte Elegante"
              className="social-pill instagram-pill"
              title="@arteelegantebarbershop"
              onClick={() => trackSocial('instagram', 'navbar_mobile')}
            >
              <svg viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M224 144a112 112 0 1 0 112 112A112 112 0 0 0 224 144Zm124-41a54 54 0 0 0-54-54H154a54 54 0 0 0-54 54v140a54 54 0 0 0 54 54h140a54 54 0 0 0 54-54Zm48-41v224a102 102 0 0 1-102 102H154A102 102 0 0 1 52 344V120A102 102 0 0 1 154 18H294A102 102 0 0 1 396 120ZM336 68a20 20 0 1 0 20 20 20 20 0 0 0-20-20Z"/></svg>
              <span>@arteelegantebarbershop</span>
            </a>
            <a
              href={wspHref}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="WhatsApp Arte Elegante"
              className="social-pill whatsapp-pill"
              title="+56 9 3771 1681"
              onClick={() => trackSocial('whatsapp', 'navbar_mobile')}
            >
              <svg viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M380.9 97.1C339-9.5 208.1-32 125.2 40.6 47.5 106.2 36.2 228.7 96 311.1L80 432l118.1-30.1c70.6 39.3 160.2 24.6 217.3-35.1 60.1-62.5 53.4-163.1-10.5-220.7z"/></svg>
              <span>WhatsApp</span>
            </a>
          </li>
        </ul>

        {/* --- Píldoras derecha (desktop) con rótulo --- */}
        <div className="navbar-cta">
          <span className="socials-label socials-label--desktop">Síguenos</span>
          <a
            href="https://www.instagram.com/arteelegantebarbershop/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram Arte Elegante"
            className="social-pill instagram-pill"
            title="@arteelegantebarbershop"
            onClick={() => trackSocial('instagram', 'navbar_desktop')}
          >
            <svg viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M224 144a112 112 0 1 0 112 112A112 112 0 0 0 224 144Zm124-41a54 54 0 0 0-54-54H154a54 54 0 0 0-54 54v140a54 54 0 0 0 54 54h140a54 54 0 0 0 54-54Zm48-41v224a102 102 0 0 1-102 102H154A102 102 0 0 1 52 344V120A102 102 0 0 1 154 18H294A102 102 0 0 1 396 120ZM336 68a20 20 0 1 0 20 20 20 20 0 0 0-20-20Z"/></svg>
            <span>@arteelegantebarbershop</span>
          </a>
          <a
            href={wspHref}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="WhatsApp Arte Elegante"
            className="social-pill whatsapp-pill"
            title="+56 9 3771 1681"
            onClick={() => trackSocial('whatsapp', 'navbar_desktop')}
          >
            <svg viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M380.9 97.1C339-9.5 208.1-32 125.2 40.6 47.5 106.2 36.2 228.7 96 311.1L80 432l118.1-30.1c70.6 39.3 160.2 24.6 217.3-35.1 60.1-62.5 53.4-163.1-10.5-220.7z"/></svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
