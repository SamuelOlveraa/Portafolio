// backend/contact/index.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// Habilita CORS de forma segura en producción (ajusta si tu frontend tiene dominio personalizado)
app.use(cors({
  origin: ['https://samuelolveraa.github.io', 'http://localhost:5173'], // agrega otros si usas otros entornos
  methods: ['POST'],
  allowedHeaders: ['Content-Type']
}));

// Middleware para analizar JSON
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject,
      text: message
    });

    res.status(200).json({ success: true, message: 'Correo enviado correctamente' });
  } catch (err) {
    console.error('❌ Error al enviar el correo:', err);
    res.status(500).json({ error: 'Hubo un error al enviar el mensaje. Intenta más tarde.' });
  }
});

// Puerto dinámico para Render u otros entornos
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`✅ Servidor backend corriendo en http://localhost:${PORT}`);
});
