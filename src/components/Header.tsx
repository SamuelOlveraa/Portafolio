import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Code } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Sobre Mí' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'contact', label: 'Contacto' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/src/assets/docs/Samuel_Olvera.pdf';
    link.download = 'CV-Desarrollador-FullStack.pdf';
    link.click();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary backdrop-blur-md shadow-card'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="text-2xl font-futuristic font-bold text-neonBlue hover:text-white transition-colors cursor-pointer flex items-center space-x-2"
            onClick={() => scrollToSection('home')}
          >
            <Code size={28} className="text-neonBlue drop-shadow-[0_0_8px_#00ffff]" />
            <span className="tracking-widest">Samuel Olvera</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium font-futuristic transition-colors hover:text-neonBlue ${
                  activeSection === item.id
                    ? 'text-neonBlue'
                    : 'text-secondary'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleDownloadCV}
              className="flex items-center space-x-2 bg-neonBlue text-primary px-4 py-2 rounded-3xl shadow-neon-blue hover:bg-neonBlue hover:shadow-white transition-all font-futuristic"
            >
              <Download size={16} />
              <span>CV</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-neonBlue hover:text-neonBlue transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-primary shadow-card border-t border-neonBlue">
            <div className="flex flex-col py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-6 py-3 text-sm font-futuristic font-medium transition-colors hover:bg-neonBlue/10 ${
                    activeSection === item.id
                      ? 'text-neonBlue bg-neonBlue/10'
                      : 'text-secondary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={handleDownloadCV}
                className="mx-6 mt-2 flex items-center justify-center space-x-2 bg-neonBlue text-primary px-4 py-2 rounded-3xl shadow-neon-blue hover:bg-neonPink hover:shadow-neon-pink transition-all font-futuristic"
              >
                <Download size={16} />
                <span>Descargar CV</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
