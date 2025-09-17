import './Home.css'; // Estilos globales compartidos
import './sections/Hero.css'; // Estilos específicos del hero

import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Galeria from './sections/Galeria';
import Servicios from './sections/Servicios';
import Confianza from './sections/Confianza'; // ✅ Nueva sección
import Agendar from './sections/Agendar';
import Contacto from './sections/Contacto';
import Footer from './sections/Footer';
import WhatsAppFloat from './components/WhatsAppFloat'; // ✅ Botón flotante

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Galeria />
      <Servicios />
      <Confianza />   {/* ✅ Nueva sección de testimonios */}
      <Agendar />
      <Contacto />
      <Footer />
      <WhatsAppFloat /> {/* ✅ Botón flotante siempre visible */}
    </>
  );
}

export default App;
