import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-neonBlue/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Nombre y descripción */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold font-futuristic text-neonBlue drop-shadow-neon-blue mb-1">
              Samuel Olvera
            </h2>
            <p className="text-sm text-secondary font-sans">
              Full-Stack Developer & Data Scientist
            </p>
          </div>

          {/* Firma con íconos */}
          <div className="flex items-center text-sm text-secondary space-x-2 font-mono text-center">
            <span>Hecho con</span>
            <Heart size={16} className="text-neonPink animate-pulse drop-shadow-neon-pink" />
            <span>y</span>
            <Code size={16} className="text-neonBlue drop-shadow-neon-blue" />
            <span>
              por <span className="text-neonBlue font-bold">Samuel Olvera</span> © {new Date().getFullYear()}
            </span>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="mt-8 pt-6 border-t border-secondary text-center text-xs text-secondary font-sans">
          <p>© Todos los derechos reservados. Este sitio fue diseñado con pasión, precisión y un toque de neón ⚡</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
