import './Home.css'; // 👈 Importamos estilos globales (ya movido a src/)

import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Galeria from './sections/Galeria';
import Servicios from './sections/Servicios';
import Agendar from './sections/Agendar';
import Contacto from './sections/Contacto';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Galeria />
      <Servicios />
      <Agendar />
      <Contacto />
    </>
  );
}

export default App;
