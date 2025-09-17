import React from 'react';
import './Contacto.css';

const Contacto = () => (
  <section id="contacto" className="contacto-section">
    <h2 className="contacto-titulo">Contáctanos</h2>
    <p className="contacto-subtitulo">
      Aquí tienes toda la información para encontrarnos o hablar con nosotros
    </p>

    <div className="contacto-info">
      <p>📍 <strong>Dirección:</strong> Av Palmas 2108, Los Pinos, Quilpué</p>
      <p>📞 <strong>Teléfono:</strong> <a href="tel:+56937711681">+56 9 3771 1681</a></p>
      <p>📸 <strong>Instagram:</strong> <a href="https://www.instagram.com/arteelegantebarbershop" target="_blank" rel="noreferrer">@arteelegantebarbershop</a></p>
    </div>

    <div className="mapa-container">
      <iframe
        title="Mapa de ubicación Arte Elegante Barbería en Quilpué"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.4492138882973!2d-71.4297!3d-33.0456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689e130e4f3f2e3%3A0x8d7713f3e7cc3519!2sAv.%20Las%20Palmas%202108%2C%20Quilpu%C3%A9%2C%20Valpara%C3%ADso!5e0!3m2!1ses!2scl!4v1716400000000"
        width="100%"
        height="300"
        style={{ border: 0, borderRadius: "12px" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  </section>
);

export default Contacto;
