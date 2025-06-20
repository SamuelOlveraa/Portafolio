import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, GraduationCap } from 'lucide-react';
import Hyperspeed from '../Backgrounds/Hyperspeed';


const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
   <section className="relative min-h-screen bg-black overflow-hidden text-white">
    <Hyperspeed/>
    <div className="relative z-10 pt-24">
      {/* Elementos de fondo animados */}
      <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-blue rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-blue rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
      {/* Foto de perfil con contorno y efectos */}
      <div
        className={`flex justify-center mb-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        <div className="relative w-60 h-60 md:w-52 md:h-52 rounded-full overflow-hidden shadow-lg border-4 border-neonBlue/80 bg-gradient-to-tr from-neonBlue/30 via-neonPurple/20 to-neonGreen/20 animate-pulse">
        <img
          src="/Samuel.jpg"
          alt="Samuel Olvera"
          className="w-full h-full object-cover rounded-full"
        />
        {/* Efecto de resplandor */}
        <span className="absolute inset-0 rounded-full border-4 border-primary animate-pulse pointer-events-none"></span>
        </div>
      </div>

      <div
        className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-futuristic-gradient bg-clip-text text-neonBlue drop-shadow-neon-blue font-futuristic relative">
          <span className="relative z-10">Samuel Olvera</span>
          <span
            className="absolute inset-0 blur-md opacity-60 text-neonBlue pointer-events-none select-none"
            aria-hidden="true"
          >
            Samuel Olvera
          </span>
        </h1>
        <h2
        className={`flex items-center justify-center gap-2 text-xl md:text-2xl font-light mb-6 text-neonBlue transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } font-futuristic`}
        >
        <GraduationCap size={28} className="text-neonBlue" />
        Estudiante de Ingeniería en Ciencias de la Computación.
        </h2>

        <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        >
        {/* Desarrollo Web */}
        <div className="bg-primary/10 rounded-3xl shadow-card p-6 flex flex-col items-center hover:scale-105 transition-transform group border border-neonBlue">
          <span className="bg-neonBlue/20 p-4 rounded-full mb-3 group-hover:bg-neonBlue/40 transition-colors">
          <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-neonBlue">
            <rect x="3" y="4" width="18" height="14" rx="2" />
            <path d="M8 20h8" />
            <path d="M12 16v4" />
          </svg>
          </span>
          <span className="text-base font-semibold text-neonBlue mb-1">Desarrollo Web</span>
        </div>
        {/* Bases de Datos */}
        <div className="bg-primary/10 rounded-3xl shadow-card p-6 flex flex-col items-center hover:scale-105 transition-transform group border border-neonPurple/30">
          <span className="bg-neonPurple/20 p-4 rounded-full mb-3 group-hover:bg-neonPurple/40 transition-colors">
          <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-neonPurple">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
            <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
          </svg>
          </span>
          <span className="text-base font-semibold text-neonPurple mb-1">Bases de Datos</span>
        </div>
        {/* Desarrollo Móvil */}
        <div className="bg-primary/10 rounded-3xl shadow-card p-6 flex flex-col items-center hover:scale-105 transition-transform group border border-neonGreen/30">
          <span className="bg-neonGreen/20 p-4 rounded-full mb-3 group-hover:bg-neonGreen/40 transition-colors">
          <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-neonGreen">
            <rect x="6" y="2" width="12" height="20" rx="3" />
            <circle cx="12" cy="18" r="1" />
          </svg>
          </span>
          <span className="text-base font-semibold text-neonGreen mb-1">Desarrollo Móvil</span>
        </div>
        {/* UX/UI */}
        <div className="bg-primary/10 rounded-3xl shadow-card p-6 flex flex-col items-center hover:scale-105 transition-transform group border border-neonOrange/30">
          <span className="bg-neonOrange/20 p-4 rounded-full mb-3 group-hover:bg-neonOrange/40 transition-colors">
          <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-neonOrange">
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <path d="M8 7V5a4 4 0 1 1 8 0v2" />
          </svg>
          </span>
          <span className="text-base font-semibold text-neonOrange mb-1">UX/UI</span>
        </div>
        </div>

        <p
        className={`text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        >
        Apasionado por la creación de soluciones tecnológicas modernas y eficientes, combinando desarrollo web, móvil, bases de datos y diseño UX/UI para impactar positivamente en el mundo real.
        </p>

        <div
        className={`flex justify-center space-x-6 mb-12 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        >
        <a
          href="https://github.com/SamuelOlveraa"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-neonBlue/70 backdrop-blur-sm rounded-full hover:bg-neonBlue/95 transition-all duration-300 hover:scale-110 shadow-neon-blue"
        >
          <Github size={24} />
        </a>
        <a
          href="https://linkedin.com/in/samuel-olvera-cervantes-422338367"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-neonPurple/70 backdrop-blur-sm rounded-full hover:bg-neonPurple/95 transition-all duration-300 hover:scale-110 shadow-neon-purple"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="mailto:samuolvera332@gmail.com"
          className="p-3 bg-neonGreen/70 backdrop-blur-sm rounded-full hover:bg-neonGreen/95 transition-all duration-300 hover:scale-110 shadow-neon-green"
        >
          <Mail size={24} />
        </a>
        </div>

        <button
        onClick={scrollToAbout}
        className={`inline-flex items-center space-x-2 bg-accent hover:bg-primary px-8 py-4 rounded-3xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-neon-blue font-futuristic ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '900ms' }}
        >
        <span>Conoce mi trabajo</span>
        <ChevronDown size={20} />
        </button>
        {/* Espacio después del botón */}
        <div className="h-8" />
      </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDown size={24} className="text-white" />
      </div>
  </div>
    </section>
    
  );
};

export default Hero;
