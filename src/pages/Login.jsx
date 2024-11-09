import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulate login logic
    if (username && password) {
      // After successful login, navigate to home
      navigate('/');
    }
  };

  const goToRegister = () => {
    navigate('/register');
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  };

  const formStyle = {
    background: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    margin: '10px 0',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '300px',
  };

  const buttonStyle = {
    marginTop: '10px',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
  };

  const registerLinkStyle = {
    marginTop: '15px',
    color: '#007bff',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <button onClick={handleLogin} style={buttonStyle}>
          Login
        </button>
        <div style={registerLinkStyle} onClick={goToRegister}>
          Don't have an account? Register
        </div>
      </div>
    </div>
  );
};

export default Login;
