import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import Hyperspeed from '../Backgrounds/Hyperspeed';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );
    const element = document.getElementById('contact');
    if (element) observer.observe(element);
    return () => { if (element) observer.unobserve(element); };
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'samuolvera332@gmail.com',
      href: 'mailto:samuolvera332@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Puebla, México',
      href: 'https://maps.google.com'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/SamuelOlveraa',
      color: 'hover:text-neonPurple'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/samuel-olvera-cervantes-422338367',
      color: 'hover:text-neonPurple'
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Por favor completa todos los campos.');
      return;
    }

    try {
      const response = await fetch('https://portafolio-nk5h.onrender.com/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('¡Mensaje enviado con éxito! Te contactaré pronto.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await response.json();
        alert(`Error al enviar: ${data.error || 'Intenta más tarde.'}`);
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Hubo un problema al enviar el mensaje.');
    }
  };

  return (
    <section id="contact" className="relative min-h-screen bg-black overflow-hidden text-white">
      <Hyperspeed />
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-neon-green font-futuristic">
            Contacto
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-white to-neonPurple mx-auto mb-8 rounded-full shadow-neon-blue"></div>
          <p className="text-lg text-secondary max-w-3xl mx-auto leading-relaxed font-sans">
            ¿Tienes un proyecto en mente? Me encantaría colaborar contigo.<br />
            Hablemos sobre cómo puedo ayudarte a crear algo increíble.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-bold text-neonBlue mb-8 drop-shadow-neon-blue font-futuristic">
              Información de Contacto
            </h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 bg-codeBg/70 rounded-3xl shadow-card hover:shadow-neon-blue transition-all duration-300 hover:-translate-y-1 group border border-neonBlue/30"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-neon-blue">
                    <info.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-secondary font-medium">{info.label}</p>
                    <p className="text-neonBlue font-semibold group-hover:text-highlight transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-neonBlue mb-4 font-futuristic">
                Sígueme en redes
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-codeBg rounded-3xl shadow-card flex items-center justify-center transition-all duration-300 hover:shadow-neon-blue hover:-translate-y-1 text-neonBlue ${social.color}`}
                  >
                    <social.icon size={22} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <form onSubmit={handleSubmit} className="bg-codeBg/50 rounded-3xl shadow-card p-8 border border-neonBlue">
              <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-neon-pink font-futuristic">
                Envíame un mensaje
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 border rounded-xl bg-transparent text-white focus:outline-none transition-all duration-300 font-futuristic ${
                      focusedField === 'name' ? 'border-neonBlue shadow-neon-blue scale-105' : 'border-secondary'
                    }`}
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 border rounded-xl bg-transparent text-white focus:outline-none transition-all duration-300 font-futuristic ${
                      focusedField === 'email' ? 'border-neonBlue shadow-neon-blue scale-105' : 'border-secondary'
                    }`}
                    placeholder="Tu email"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 border rounded-xl bg-transparent text-white focus:outline-none transition-all duration-300 font-futuristic ${
                    focusedField === 'subject' ? 'border-neonBlue shadow-neon-blue scale-105' : 'border-secondary'
                  }`}
                  placeholder="Asunto"
                  required
                />
              </div>
              <div className="mb-6">
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 border rounded-xl bg-transparent text-white focus:outline-none transition-all duration-300 resize-none font-futuristic ${
                    focusedField === 'message' ? 'border-neonBlue shadow-neon-blue scale-105' : 'border-secondary'
                  }`}
                  placeholder="Tu mensaje..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-accent/80 text-white font-semibold py-4 rounded-xl hover:shadow-neon-blue transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 font-futuristic"
              >
                <Send size={20} />
                <span>Enviar Mensaje</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
