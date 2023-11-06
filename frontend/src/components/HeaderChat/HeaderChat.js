import React from 'react';
import logoImg from '../../assets/logoTeste.svg'
import { ButtonEstilo, DivButton, DivLeft, DivLogo, HeaderContainer, ImgLogo } from './Header2.jsx';

function Header2 () {
  const handleButtonClick = () => {
    window.location.href = './pages/Login/Login';
  };

  return (
    <HeaderContainer>
      <DivLogo>
        <ImgLogo src={logoImg} alt="Logo"/>
      </DivLogo>
      <DivButton>
        <ButtonEstilo onClick={handleButtonClick}>HOME</ButtonEstilo>
      </DivButton>
    </HeaderContainer>
  )
}

export default Header2;