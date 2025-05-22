import React from 'react';
import './Servicios.css';

const servicios = [
  { nombre: 'Corte clásico', icono: '💇‍♂️' },
  { nombre: 'Corte fade', icono: '🔥' },
  { nombre: 'Barba / perfilado', icono: '🧔' },
  { nombre: 'Afeitado', icono: '🪒' },
  { nombre: 'Limpieza facial', icono: '🧖‍♂️' },
];

const Servicios = () => (
  <section id="servicios" className="servicios-section">
    <h2 className="servicios-titulo">Servicios</h2>
    <p className="servicios-subtitulo">Experimenta el estilo y el cuidado personalizado que mereces</p>
    <div className="servicios-grid">
      {servicios.map((servicio, idx) => (
        <div key={idx} className="servicio-card">
          <div className="servicio-icono">{servicio.icono}</div>
          <h3>{servicio.nombre}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default Servicios;
