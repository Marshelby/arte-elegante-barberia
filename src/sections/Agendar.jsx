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
      <h2 className="agendar-titulo">¡Agenda ya tu cita!</h2>
      <p className="agendar-subtitulo">Rellena el formulario y serás redirigido automáticamente a WhatsApp con tu solicitud lista para enviar.</p>

      <div className="formulario">
        <label>
          Tu nombre
          <input type="text" placeholder="Ej: Juan Pérez" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>

        <label>
          Fecha de tu cita
          <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
        </label>

        <label>
          Hora deseada
          <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} />
        </label>

        <label>
          Servicio que necesitas
          <select value={servicio} onChange={(e) => setServicio(e.target.value)}>
            <option value="">Selecciona un servicio</option>
            <option value="Corte clásico">Corte clásico</option>
            <option value="Corte fade">Corte fade</option>
            <option value="Barba / perfilado">Barba / perfilado</option>
            <option value="Afeitado">Afeitado</option>
            <option value="Limpieza facial">Limpieza facial</option>
          </select>
        </label>

        <label>
          Mensaje adicional (opcional)
          <textarea placeholder="Ej: ¿Puedo llevar a mi hijo también?" value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
        </label>

        <button className="boton-reservar" onClick={enviarWhatsApp}>📲 Reservar ahora</button>
      </div>
    </section>
  );
};

export default Agendar;
