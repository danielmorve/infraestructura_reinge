const express = require('express');
const serverless = require('serverless-http');

const app = express();
app.use(express.json());

// Manejo de CORS (por si pruebas desde localhost)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

app.get('/hello', (req, res) => {
  res.json({ message: '¡Hola desde el backend en Netlify!' });
});

module.exports.handler = serverless(app);