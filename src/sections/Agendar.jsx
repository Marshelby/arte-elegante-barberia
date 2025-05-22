import React from 'react';
import './Agendar.css';

const Agendar = () => (
  <section id="agendar" className="agendar-section">
    <h2 className="agendar-titulo">Agenda tu cita</h2>
    <p className="agendar-subtitulo">
      Haz clic en el botón para reservar tu hora fácilmente a través de WhatsApp o Instagram.
    </p>
    <div className="agendar-botones">
      <a
        href="https://wa.me/56937711681?text=Hola%2C%20quiero%20agendar%20una%20cita%20en%20Arte%20Elegante%20Barbershop%20✂️"
        target="_blank"
        rel="noreferrer"
        className="boton-whatsapp"
      >
        📲 Agendar por WhatsApp
      </a>
      <a
        href="https://www.instagram.com/arteelegantebarbershop"
        target="_blank"
        rel="noreferrer"
        className="boton-instagram"
      >
        📸 Ver Instagram
      </a>
    </div>
  </section>
);

export default Agendar;
