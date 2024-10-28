import React, { useState } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={appContainer}>
      <h1 style={titleStyle}>Counter App</h1>
      <div style={counterDisplay}>
        <h2>{count}</h2>
      </div>
      <div style={buttonContainer}>
        <button onClick={increment} style={{ ...buttonStyle, backgroundColor: '#4CAF50' }}>Increment</button>
        <button onClick={decrement} style={{ ...buttonStyle, backgroundColor: '#f44336' }}>Decrement</button>
      </div>
    </div>
  );
};

// App styles
const appContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f0f0f0',
  fontFamily: 'Arial, sans-serif',
};

const titleStyle = {
  fontSize: '2.5rem',
  color: '#333',
  marginBottom: '20px',
};

const counterDisplay = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  backgroundColor: '#333',
  color: '#fff',
  fontSize: '3rem',
  marginBottom: '20px',
};

const buttonContainer = {
  display: 'flex',
  gap: '20px',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '18px',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

export default CounterApp;
