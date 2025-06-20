/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a', // azul oscuro profundo
        secondary: '#ffffff', // tono intermedio para fondos
        accent: '#38bdf8', // azul claro para detalles
        highlight: '#facc15', // amarillo para resaltar
        codeBg: '#0a0a0a', // fondo de terminal/code oscuro

        // Neón futurista
        neonBlue: '#00ffff',
        neonGreen: '#39ff14',
        neonPink: '#ff00c8',
        neonPurple: '#9d00ff',
        neonOrange: '#ff6f00',
        cyberRed: '#ff3131',
      },
      fontFamily: {
        sans: ['"Orbitron"', 'Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['"Fira Code"', 'ui-monospace', 'SFMono-Regular'],
        futuristic: ['"Share Tech Mono"', '"Orbitron"', 'monospace'],
      },
      borderRadius: {
        xl: '1rem',
        '3xl': '2rem',
        cyber: '0.25rem 1rem', // estilo asimétrico cibernético
      },
      boxShadow: {
        card: '0 4px 24px rgba(56, 189, 248, 0.3)',
        'neon-blue': '0 0 8px #00ffff, 0 0 16px #00ffff',
        'neon-blue-glow': '0 0 4pxrgb(1, 10, 115), 0 0 8pxrgb(0, 38, 255)',
        'neon-green': '0 0 8px #39ff14, 0 0 16px #39ff14',
        'neon-pink': '0 0 8px #ff00c8, 0 0 16px #ff00c8',
        'neon-purple': '0 0 8px #9d00ff, 0 0 16px #9d00ff',
        'neon-orange': '0 0 8px #ff6f00, 0 0 16px #ff6f00',
        'neon-red': '0 0 8px #ff3131, 0 0 16px #ff3131',
        'neon-highlight': '0 0 4px #facc15, 0 0 8px #facc15',
        'terminal-glow': '0 0 2px #38bdf8, 0 0 6px #38bdf8',
      },
      backgroundImage: {
        'futuristic-gradient':
          'linear-gradient(135deg, #1e3a8a 0%, #000000 100%)',
        'terminal-lines':
          'repeating-linear-gradient(0deg, #0f172a 0px, #0f172a 1px, #111827 1px, #111827 2px)',
        'code': 'linear-gradient(135deg, #00b7f9 0%, #0a2b73 100%)',
      },
      animation: {
        'flicker': 'flicker 1.5s infinite alternate',
      },
      keyframes: {
        flicker: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],


};
