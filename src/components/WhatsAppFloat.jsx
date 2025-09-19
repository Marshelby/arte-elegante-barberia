import React from "react";
import "./WhatsAppFloat.css";

const PHONE = "56937711681"; // <- si cambia, actualiza aquí
const MSG = "Hola, quiero reservar una cita ✂️";
const WA_LINK = `https://wa.me/${PHONE}?text=${encodeURIComponent(MSG)}`;

export default function WhatsAppFloat() {
  const handleClick = () => {
    // GA4
    if (window.gtag) {
      window.gtag("event", "click_whatsapp", { location: "float_button" });
    }
    // Meta Pixel
    if (window.fbq) {
      window.fbq("trackCustom", "ClickWhatsApp", { location: "float_button" });
    }
  };

  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir WhatsApp"
      className="wsp-float"
      onClick={handleClick}
    >
      {/* Ícono WhatsApp (SVG sin dependencias) */}
      <svg viewBox="0 0 32 32" aria-hidden="true" className="wsp-icon">
        <path d="M26.73 5.27A13.33 13.33 0 0016 1.33 13.38 13.38 0 002.67 14.67c0 2.35.62 4.63 1.79 6.64L2 30l8.91-2.33a13.3 13.3 0 006.09 1.53h.01A13.35 13.35 0 0029.33 14.67c0-3.56-1.39-6.9-3.86-9.4zM16.99 27.33h-.01a10.94 10.94 0 01-5.57-1.53l-.4-.24-5.29 1.39 1.41-5.16-.26-.42a10.98 10.98 0 01-1.68-5.7c0-6.06 4.93-10.99 11-10.99 2.94 0 5.7 1.15 7.77 3.23a10.84 10.84 0 013.22 7.76c0 6.06-4.93 11-11 11z"/>
        <path d="M19.11 17.59c-.27-.14-1.58-.78-1.82-.87-.24-.09-.42-.14-.6.14-.18.27-.69.86-.84 1.03-.15.18-.31.2-.57.07-.27-.14-1.12-.41-2.13-1.31-.79-.71-1.32-1.58-1.47-1.85-.15-.27-.02-.42.11-.56.11-.11.24-.27.36-.4.12-.13.16-.22.24-.36.08-.13.04-.27-.02-.4-.07-.14-.6-1.45-.82-1.99-.22-.53-.45-.46-.6-.47-.15-.01-.33-.01-.51-.01s-.47.07-.71.33c-.24.27-.93.91-.93 2.22 0 1.31.95 2.58 1.08 2.75.13.18 1.87 2.86 4.55 3.99.64.27 1.14.43 1.52.56.64.2 1.22.17 1.68.1.51-.08 1.58-.64 1.8-1.26.22-.62.22-1.15.15-1.26-.07-.11-.24-.18-.51-.32z"/>
      </svg>
    </a>
  );
}
