const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Servir el frontend desde 'dist' (debe estar dentro de esta carpeta)
app.use(express.static(path.join(__dirname, 'dist')));

// Ruta de envío de correo
app.post('/send', async (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: `"Samuel Olvera" <${process.env.EMAIL}>`,
      to: process.env.DESTINO,
      subject: `Nuevo mensaje: ${subject}`,
      text: `Nombre: ${name}\nEmail: ${email}\nAsunto: ${subject}\nMensaje: ${message}`,
      replyTo: email
    });

    res.status(200).json({ message: 'Correo enviado con éxito' });
  } catch (error) {
    console.error('❌ Error al enviar el correo:', error);
    res.status(500).json({
      error: 'Error al enviar el correo',
      message: error.message
    });
  }
});

// Redirigir cualquier otra ruta al frontend (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Puerto dinámico (para Render u otros hosts)
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor funcionando en puerto ${PORT}`);
});
