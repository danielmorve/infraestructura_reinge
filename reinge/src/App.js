import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('Cargando...');

  useEffect(() => {
    fetch('/.netlify/functions/api/hello')  // Llama al backend relativo a la URL
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => setMessage('Error: ' + error));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Mi App Fullstack</h1>
      <p>Mensaje del backend: {message}</p>
    </div>
  );
}

export default App;