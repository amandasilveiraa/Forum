import React from 'react';
import Header from './components/Header/Header';
import StyledGlobal from './styledGlobal';
import Perfil from './pages/Perfil/VisualizarPerfil'
// import Login from './pages/Login/Login';
// import Sidebar from './components/Nav/Nav';

const App = () => {
  return (
    <div>
      <StyledGlobal/>
      <Header />
      {/* <Sidebar/> */}
      {/* <Login /> */}
      <Perfil/>
    </div>
  );
};

export default App;
