// index.js

const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Middleware para analizar JSON
app.use(express.json());

// Ruta para enviar correo
app.post('/send', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: `"CREATECH SYSTEMS" <${process.env.EMAIL}>`,
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

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en puerto ${PORT}`);
});
