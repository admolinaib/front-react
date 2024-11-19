import React from 'react';
import axios from 'axios';

function TestComponent() {
  const testLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/login', {
        email: 'dani@mail.com',
        password: 'D123'
      });
      console.log('Respuesta:', response.data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div>
      <button onClick={testLogin}>Test Login</button>
    </div>
  );
}

export default TestComponent;