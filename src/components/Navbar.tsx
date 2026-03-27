import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 w-full bg-[#080808]/90 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center border-b-red">
        <div></div>
        {/* Desktop */}
        <ul className="hidden md:flex gap-8 text-lg">
          <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
          <li><a href="#achivement" className="hover:text-accent transition-colors">Achivement</a></li>
          <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
          <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
          <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
        </ul>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-3xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#080808] py-6 border-t border-white/10">
          <ul className="flex flex-col items-center gap-6 text-xl">
            <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#achivement" onClick={() => setIsOpen(false)}>Achivement</a></li>
            <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;