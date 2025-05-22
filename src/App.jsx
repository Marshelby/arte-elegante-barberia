import './Home.css'; // Estilos globales compartidos
import './sections/Hero.css'; // Estilos específicos del hero

import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Galeria from './sections/Galeria';
import Servicios from './sections/Servicios';
import Agendar from './sections/Agendar';
import Contacto from './sections/Contacto';
import Footer from './sections/Footer'; // ✅ Nuevo Footer importado

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Galeria />
      <Servicios />
      <Agendar />
      <Contacto />
      <Footer /> {/* ✅ Footer al final */}
    </>
  );
}

export default App;
