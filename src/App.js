import React from 'react';
import Header from './components/Header/Header';
import StyledGlobal from './styledGlobal';
import Login from './pages/Login/Login';

const App = () => {
  return (
    <div>
      <StyledGlobal/>
      <Header />
      <Login />
    </div>
  );
};

export default App;
