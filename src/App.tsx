import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Achievement from './components/Achivements'
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#080808] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Achievement />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;