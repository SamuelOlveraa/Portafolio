import React, { useState, useEffect } from 'react';
import { Database, Globe, Smartphone, Zap } from 'lucide-react';
import Hyperspeed from '../Backgrounds/Hyperspeed';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const skills = [
    {
      icon: Globe,
      title: 'Desarrollo Web',
      description:
        'Implementación de interfaces y sistemas web modernos con HTML5, React, TypeScript y Tailwind CSS. Enfoque en rendimiento, modularidad y diseño responsivo.',
      bg: 'from-neonBlue/30 to-neonBlue/30',
      shadow: 'shadow-neon-blue',
      border: 'border-neonBlue',
      text: 'text-neonBlue',
    },
    {
      icon: Smartphone,
      title: 'Desarrollo Móvil',
      description:
        'Creación de aplicaciones móviles nativas y cross-platform usando Dart y Flutter. Diseño enfocado en usabilidad, animaciones fluidas y optimización multiplataforma.',
      bg: 'from-neonGreen/30 to-neonGreen/30',
      shadow: 'shadow-neon-green',
      border: 'border-neonGreen',
      text: 'text-neonGreen',
    },
    {
      icon: Database,
      title: 'Gestión de Bases de Datos',
      description:
        'Modelado, optimización y administración de bases de datos SQL como MySQL y SQLite. Énfasis en integridad, eficiencia de consultas y escalabilidad.',
      bg: 'from-neonPurple/30 to-neonPurple/30',
      shadow: 'shadow-neon-purple',
      border: 'border-neonPurple',
      text: 'text-neonPurple',
    },
    {
      icon: Zap,
      title: 'Análisis de Datos',
      description:
        'Exploración, análisis y visualización de datos mediante Python, utilizando bibliotecas como Pandas, NumPy, Matplotlib y NLTK para inferencia y predicción.',
      bg: 'from-highlight/30 to-highlight/30',
      shadow: 'shadow-highlight',
      border: 'border-highlight',
      text: 'text-highlight',
    },
  ];

  return (
    <section className="relative min-h-screen bg-black overflow-hidden text-white" id="about">
      <Hyperspeed />
      <div className="relative z-10 pt-24">
        <div
          className={`text-center mb-10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neonBlue mb-6 font-futuristic tracking-wide drop-shadow-neon-blue">
            Sobre Mí
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-white to-neonPurple mx-auto mb-8 rounded-full shadow-neon-blue"></div>
          <p className="text-lg text-secondary max-w-3xl mx-auto leading-relaxed font-sans">
            Soy estudiante de noveno semestre de Ingeniería en Ciencias de la Computación en la Benemérita Universidad Autónoma de Puebla, con orientación al desarrollo de soluciones tecnológicas.<br />
            Tengo experiencia en programación web, desarrollo móvil y análisis de datos, aplicada en sitios web, aplicaciones móviles y proyectos académicos.
            Me adapto con facilidad, aprendo rápidamente, trabajo en equipo y aporto creatividad y responsabilidad.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 p-8 bg-transparent">
          {skills.map(({ icon: Icon, title, description, bg, shadow, border, text }, index) => (
            <div
              key={index}
              className={`
                group relative w-72 h-80 transition-all duration-500
                hover:scale-105
                bg-gradient-to-br ${bg} ${shadow} ${border}
                border text-white rounded-3xl shadow-card
                overflow-hidden
              `}
              style={{
                clipPath:
                  'polygon(0% 20%, 20% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%)',
              }}
            >
              <div className="absolute inset-0" />
              <div className="relative z-10 flex flex-col items-start justify-end h-full p-8 text-left">
                <Icon className={`text-4xl mb-6 ${text}`} />
                <h3 className={`text-xl font-bold font-futuristic mb-2 ${text}`}>
                  {title}
                </h3>
                <p className="text-sm text-secondary font-sans">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
