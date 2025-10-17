import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('Cargando...');

  useEffect(() => {
    fetch('/api/hello', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setMessage(data.message))
      .catch(error => setMessage(`Error: ${error.message}`));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Mi App Fullstack</h1>
      <p>Mensaje del backend: {message}</p>
    </div>
  );
}

export default App;