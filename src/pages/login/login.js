// LoginPage.js
import './login.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('logged');
    if (loggedInStatus === 'true') {
      navigate('/painel');
    }
  }, [navigate]);

  const handleLogin = () => {
    if (
    (user === 'afefe' && password === '1234') ||
    (user === 'howl' && password === '8814') ||
    (user === 'satt' && password === '2811') ||
    (user === 'nosh' && password === '1702')) {
      localStorage.setItem('logged', 'true');
      localStorage.setItem('user-logged', user); // Salva o valor do usuário no LocalStorage
      navigate('/painel');
    } else {
      alert('Usuário ou senha inválidos. Por favor, tente novamente.');
    }
  };

  return (
    <body>
      <div className='background'>
        <span className='bg-text'>NG GANG</span>
      </div>
      <div className='login-container'>
        <div className='login-card'>
          <button id='help-btn'>?</button>
          <div className='card-text-container'>
            <span className='card-text'>NG<br/>GANG</span>
          </div>
          <div className='login-container1'>
            <span className='login-text'>LOGIN</span>
            <input 
              type="text" 
              value={user} 
              onChange={(e) => setUser(e.target.value)} 
              placeholder="Usuário" 
            />
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Senha" 
            />
          </div>
          <button id='login-btn' onClick={handleLogin}>Entrar</button>
        </div>
      </div>
    </body>
  );
}

export default LoginPage;
