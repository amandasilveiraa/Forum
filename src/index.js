import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Cadastro from './pages/Cadastro/Cadastro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cadastro />
    <App />
  </React.StrictMode>
);