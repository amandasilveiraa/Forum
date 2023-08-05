import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Cadastro from './pages/Cadastro/Cadastro';
import Header from './components/Header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Cadastro />
    <App />
  </React.StrictMode>
);