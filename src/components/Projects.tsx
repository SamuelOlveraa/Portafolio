import React, { useState, useEffect } from 'react';
import { Stethoscope as Hospital, Car, Truck, BarChart3 } from 'lucide-react';
import Hyperspeed from '../Backgrounds/Hyperspeed';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );
    const element = document.getElementById('projects');
    if (element) observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Página Web para Consultorio Médico (Mayo 2023)',
      description: 'Plataforma completa para la gestión de consultorios médicos con agenda, historiales clínicos y facturación.',
      longDescription: 'Sistema integral que digitaliza la gestión médica, incluye citas online, historiales digitales, prescripciones electrónicas y dashboard administrativo.',
      icon: Hospital,
      technologies: ['HTML', 'PHP', 'JavaScript', 'MySQL', 'Bootstrap', 'CSS'],
      image: 'https://expomedicalcr.com/especialidades.jpeg',
      bg: 'from-accent/80 to-accent/80',
      shadow: 'shadow-neon-blue',
    },
    {
      id: 2,
      title: 'Sistema de Gestión para Agencia de Autos (Noviembre 2024)',
      description: 'Sistema de gestión completo para agencias de automóviles con inventario, ventas y CRM integrado.',
      longDescription: 'Plataforma que optimiza la gestión de concesionarios con control de inventario, seguimiento de leads, cotizaciones automáticas y reportes de ventas.',
      icon: Car,
      technologies: ['HTML', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'CSS', 'XML'],
      image: 'https://chevroletcr.com/blog/wp-content/uploads/2025/02/Chevrolet-ImagenBlog-1024x670.webp',
      bg: 'from-neonGreen/80 to-neonGreen/80',
      shadow: 'shadow-neon-green',
    },
    {
      id: 3,
      title: 'Aplicación Móvil de Logística de Transporte (Marzo 2025)',
      description: 'Aplicación móvil para optimización de rutas de transporte con tracking GPS en tiempo real.',
      longDescription: 'App que revoluciona la logística de transporte con optimización de rutas mediante IA, seguimiento GPS, notificaciones push y análisis de eficiencia.',
      icon: Truck,
      technologies: ['Flutter', 'Dart', 'Google Maps API', 'SQLite'],
      image: 'https://www.sotcarga.com/images/22/1/Apps-transporte.jpg',
      bg: 'from-neonPurple/80 to-neonPurple/80',
      shadow: 'shadow-neon-purple',
    },
    {
      id: 4,
      title: 'Predicción de Resultados Electorales a partir de Tweets (Marzo 2025)',
      description: 'Plataforma de análisis predictivo para tendencias electorales usando machine learning y redes sociales.',
      longDescription: 'Sistema avanzado de análisis electoral que procesa datos de redes sociales, encuestas y tendencias históricas para predicciones políticas precisas.',
      icon: BarChart3,
      technologies: ['Python', 'Pandas', 'NLTK'],
      image: 'https://img.innovaciondigital360.com/wp-content/uploads/2024/10/24224351/sistema-de-gestion-de-datos-con-concepto-de-business-analytics.jpg',
      bg: 'from-neonOrange/80 to-neonOrange/80',
      shadow: 'shadow-accent', // Usamos una existente ya que no definiste 'shadow-neon-orange'
    }
  ];

  return (
    <section className="relative min-h-screen bg-black overflow-hidden text-white" id="projects">
      <Hyperspeed />
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-neonBlue mb-6 font-futuristic">
            Proyectos Destacados
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-white to-neonPurple mx-auto mb-8 rounded-full shadow-neon-blue"></div>
          <p className="text-lg text-secondary max-w-3xl mx-auto leading-relaxed font-sans">
            Una selección de proyectos que demuestran mi experiencia en desarrollo full-stack, 
            ciencia de datos y soluciones innovadoras para diferentes industrias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(({ id, title, description, longDescription, icon: Icon, technologies, image, bg, shadow }, index) => (
            <div
              key={id}
              className={`group relative bg-primary/60 rounded-3xl shadow-card hover:shadow-accent overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>
                <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br ${bg} ${shadow} flex items-center justify-center`}>
                  <Icon size={24} className="text-white" />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8 transition-opacity duration-300 ${
                  hoveredProject === id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="text-white">
                    <p className="text-sm leading-relaxed mb-1">{longDescription}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-neonBlue mb-3 group-hover:text-highlight transition-colors font-futuristic">
                  {title}
                </h3>
                <p className="text-secondary mb-4 leading-relaxed font-sans">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/80 text-neonBlue text-sm rounded-full font-mono hover:bg-primary hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
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

export default Projects;
