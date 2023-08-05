import React from 'react';
import logoImg from '../../assets/logoTeste.svg'
import { ButtonEstilo, DivButton, DivLeft, DivLogo, HeaderContainer, ImgLogo } from './styled';

function Header () {
  const handleButtonClick = () => {
    window.location.href = './pages/Login/Login';
  };

  return (
    <HeaderContainer>
      <DivLeft></DivLeft>
      <DivLogo>
        <ImgLogo src={logoImg} alt="Logo"/>
      </DivLogo>
      <DivButton>
        <ButtonEstilo onClick={handleButtonClick}>HOME</ButtonEstilo>
      </DivButton>
    </HeaderContainer>
  );
};

export default Header;