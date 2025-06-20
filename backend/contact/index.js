// backend/contact/index.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // o 'hotmail', 'yahoo', etc.
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: subject,
      text: message
    });

    res.status(200).json({ success: true, message: 'Correo enviado' });
  } catch (err) {
    console.error('Error al enviar correo:', err);
    res.status(500).json({ error: 'Error al enviar el mensaje' });
  }
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});

