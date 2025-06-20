import React, { useState, useEffect } from 'react';
import { Code, Smartphone, Database, BarChart2, GitBranch } from 'lucide-react';
import Hyperspeed from '../Backgrounds/Hyperspeed';

const Skills: React.FC = () => {
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

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: 'Desarrollo Web',
      icon: Code,
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'],
      color: 'from-neonBlue to-neonBlue',
      shadow: 'shadow-neon-blue'
    },
    {
      title: 'Desarrollo Móvil',
      icon: Smartphone,
      skills: ['Flutter', 'Dart', 'React'],
      color: 'from-neonGreen to-neonGreen',
      shadow: 'shadow-neon-green'
    },
    {
      title: 'Bases de Datos',
      icon: Database,
      skills: ['MySQL', 'SQLite'],
      color: 'from-neonPurple to-neonPurple',
      shadow: 'shadow-neon-purple'
    },
    {
      title: 'Análisis de Datos',
      icon: BarChart2,
      skills: ['Python', 'Pandas', 'NumPy', 'Excel'],
      color: 'from-neonOrange to-neonOrange',
      shadow: 'shadow-neon-orange'
    },
    {
      title: 'Git Básico',
      icon: GitBranch,
      skills: ['Git', 'GitHub'],
      color: 'from-highlight to-highlight',
      shadow: 'shadow-neon-highlight'
    }
  ];

  return (
    <section className="relative min-h-screen bg-black overflow-hidden text-white" id="skills">
      <Hyperspeed />
      <div className="relative z-10 pt-24">
        <div className={`text-center mb-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-neonBlue mb-6 font-futuristic">
            Habilidades Técnicas
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-white to-neonPurple mx-auto mb-8 rounded-full shadow-neon-blue"></div>
          <p className="text-lg text-secondary max-w-3xl mx-auto leading-relaxed font-sans">
            Un conjunto diverso de tecnologías y herramientas que me permiten crear 
            soluciones completas desde el frontend hasta el backend, incluyendo análisis de datos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 max-w-6xl mx-auto px-4 transition-all duration-1000">
          {skillCategories.map(({ title, icon: Icon, skills, color, shadow }, index) => (
            <div
              key={title}
              className={`group bg-primary/70 rounded-3xl ${shadow} border border-neonBlue hover:border-accent transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms`, willChange: 'transform, opacity' }}
            >
              <div className="p-10 ">
                <div className={`w-16 h-26 rounded-2xl bg-accent/30 bg-gradient-to-br ${color} flex items-center justify-center mb-16 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={32} className="text-codeBg" />
                </div>
                
                <h3 className="text-xl font-bold text-neonBlue/90 mb-1 group-hover:text-highlight transition-colors font-futuristic">
                  {title}
                </h3>
                
                <div className="space-y-3">
                  {skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className={`flex items-center justify-between p-3 bg-primary/40 rounded-lg hover:bg-neonBlue/20 transition-all duration-300 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                      }`}
                      style={{ transitionDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                    >
                      <span className="font-medium text-neonBlue hover:text-highlight transition-colors font-mono">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
       <div className="h-16" />
    </section>
  );
};

export default Skills;
