import React from 'react';
import './Servicios.css';

const servicios = [
  { nombre: 'Corte con shaver', icono: '💈', precio: '$10.000' },
  { nombre: 'Corte clásico', icono: '💇‍♂️', precio: '$8.000' },
  { nombre: 'Corte degradado', icono: '🔥', precio: '$9.000' },
  { nombre: 'Cejas', icono: 'cejas', precio: '$2.000' },
  { nombre: 'Barba', icono: '🧔', precio: '$6.000' },
];

const Servicios = () => (
  <section id="servicios" className="servicios-section">
    <h2 className="servicios-titulo">Servicios</h2>
    <p className="servicios-subtitulo">Experimenta el estilo y el cuidado personalizado que mereces</p>
    <div className="servicios-grid">
      {servicios.map((servicio, idx) => (
        <div key={idx} className="servicio-card">
          <div className="servicio-icono">
            {servicio.icono === 'cejas' ? (
              <img src="/img/cejas.png" alt="Cejas" className="icono-img" />
            ) : (
              servicio.icono
            )}
          </div>
          <h3>{servicio.nombre}</h3>
          <p className="servicio-precio">{servicio.precio}</p>
        </div>
      ))}
    </div>
    <p className="servicio-regalo">🎁 Todos los servicios incluyen limpieza facial gratuita</p>
  </section>
);

export default Servicios;
