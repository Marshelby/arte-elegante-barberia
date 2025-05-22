import React from 'react';
import './Servicios.css';

const servicios = [
  { nombre: 'Corte clásico', icono: '💇‍♂️', precio: '$6.000' },
  { nombre: 'Corte fade', icono: '🔥', precio: '$7.000' },
  { nombre: 'Barba / perfilado', icono: '🧔', precio: '$4.000' },
  { nombre: 'Afeitado', icono: '🪒', precio: '$4.000' },
  { nombre: 'Limpieza facial', icono: '🧖‍♂️', precio: '$5.000' },
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
          <p className="servicio-precio">{servicio.precio}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Servicios;
