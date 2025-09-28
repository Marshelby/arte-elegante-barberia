import React, { useEffect, useRef } from 'react';
import './Hero.css';

const onHeroCTA = () => {
  if (window.gtag) window.gtag('event', 'click_whatsapp', { location: 'hero_cta' });
  if (window.fbq) window.fbq('trackCustom', 'ClickWhatsApp', { location: 'hero_cta' });
};

/**
 * Toma una imagen, la dibuja en un canvas y promedia píxeles del borde
 * (tiras de 4-6 px alrededor). Devuelve un color HEX tipo #0d0d0f.
 */
function sampleEdgeAverageColor(imgEl) {
  try {
    const w = imgEl.naturalWidth;
    const h = imgEl.naturalHeight;
    if (!w || !h) return null;

    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const cx = canvas.getContext('2d', { willReadFrequently: true });
    cx.drawImage(imgEl, 0, 0, w, h);

    // ancho de la franja a muestrear en px (en imágenes grandes 4-6 es suficiente)
    const band = Math.max(4, Math.floor(Math.min(w, h) * 0.01));

    const samples = [];
    const bands = [
      { x: 0, y: 0, w, h: band },           // top
      { x: 0, y: h - band, w, h: band },    // bottom
      { x: 0, y: 0, w: band, h },           // left
      { x: w - band, y: 0, w: band, h },    // right
    ];

    for (const b of bands) {
      const data = cx.getImageData(b.x, b.y, b.w, b.h).data;
      let r = 0, g = 0, bl = 0, count = 0;
      // muestreamos 1 de cada N píxeles para ir más rápido
      const step = 4 * 6; // RGBA * salto
      for (let i = 0; i < data.length; i += step) {
        const R = data[i], G = data[i + 1], B = data[i + 2], A = data[i + 3];
        // si hay transparencia alta, la ignoramos
        if (A < 245) continue;
        r += R; g += G; bl += B; count++;
      }
      if (count) samples.push([r / count, g / count, bl / count]);
    }

    if (!samples.length) return null;

    // promedio global
    let R = 0, G = 0, B = 0;
    samples.forEach(([r, g, b]) => { R += r; G += g; B += b; });
    R = Math.round(R / samples.length);
    G = Math.round(G / samples.length);
    B = Math.round(B / samples.length);

    // clamp y redondeo suave hacia negro si está muy cerca (evita bandas)
    const clamp = v => Math.max(0, Math.min(255, v));
    R = clamp(R); G = clamp(G); B = clamp(B);

    // si el color está muy cerca de negro, lo fijamos a casi negro homogéneo
    const avg = (R + G + B) / 3;
    if (avg < 20) { R = G = B = 14; } // ~#0e0e0e

    const toHex = v => v.toString(16).padStart(2, '0');
    return `#${toHex(R)}${toHex(G)}${toHex(B)}`;
  } catch {
    return null;
  }
}

const Hero = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const applyColor = () => {
      const hex = sampleEdgeAverageColor(img);
      if (hex) {
        document.documentElement.style.setProperty('--hero-bg', hex);
        // opcional: un borde sutil para “fusionar” cualquier mínima diferencia
        document.documentElement.style.setProperty('--hero-bg-soft', hex);
      }
    };

    if (img.complete && img.naturalWidth) {
      applyColor();
    } else {
      img.addEventListener('load', applyColor, { once: true });
      img.addEventListener('error', () => {/* ignoramos */}, { once: true });
    }
  }, []);

  return (
    <section id="inicio" className="hero-section">
      <div className="hero-content">
        <picture>
          <source srcSet="/img/logo-arte-elegante.webp" type="image/webp" />
          <img
            ref={imgRef}
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
