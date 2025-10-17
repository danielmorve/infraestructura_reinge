const express = require('express');
const serverless = require('serverless-http');

const app = express();
app.use(express.json());  // Para parsear JSON si necesitas POSTs

app.get('/hello', (req, res) => {
  res.json({ message: '¡Hola desde el backend en Netlify!' });
});

// Puedes agregar más rutas, ej:
app.post('/echo', (req, res) => {
  res.json({ received: req.body });
});

module.exports.handler = serverless(app);