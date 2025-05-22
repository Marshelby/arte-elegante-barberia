import React, { useState } from 'react';
import './Agendar.css';

const Agendar = () => {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [servicio, setServicio] = useState('');
  const [mensaje, setMensaje] = useState('');

  const enviarWhatsApp = () => {
    const texto = `Hola, soy ${nombre}. Quiero un ${servicio} el ${fecha} a las ${hora}. ${mensaje ? 'Mensaje adicional: ' + mensaje : ''}`;
    const url = `https://wa.me/56937711681?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="agendar" className="agendar-section">
      <h2 className="agendar-titulo">Reserva personalizada</h2>
      <p className="agendar-subtitulo">Completa el formulario y agenda por WhatsApp con toda la info lista</p>

      <div className="formulario">
        <input type="text" placeholder="Tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
        <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} />
        <select value={servicio} onChange={(e) => setServicio(e.target.value)}>
          <option value="">Selecciona un servicio</option>
          <option value="Corte clásico">Corte clásico</option>
          <option value="Corte fade">Corte fade</option>
          <option value="Barba / perfilado">Barba / perfilado</option>
          <option value="Afeitado">Afeitado</option>
          <option value="Limpieza facial">Limpieza facial</option>
        </select>
        <textarea placeholder="Mensaje adicional (opcional)" value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
        <button className="boton-reservar" onClick={enviarWhatsApp}>📲 Reservar ahora</button>
      </div>
    </section>
  );
};

export default Agendar;
