import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Cadastro from './pages/Cadastro/Cadastro';
import Header from './components/Header/Header';
import Chat from './pages/Chat/Chat';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Chat />
    <App />
  </React.StrictMode>
);