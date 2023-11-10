import React from 'react';
import logoImg from '../../assets/logoTeste.svg'
import { useNavigate } from "react-router-dom";


import { ButtonEstilo, DivButton, DivLeft, DivLogo, HeaderContainer, ImgLogo } from './styled';


function Header () {

  const navigate = useNavigate()
  const goToPostagem = () => {
    navigate('/postagem')
  }

  return (
    <HeaderContainer>
      <DivLeft></DivLeft>
      <DivLogo>
        <ImgLogo src={logoImg} alt="Logo"/>
      </DivLogo>
      <DivButton>
        <ButtonEstilo onClick ={goToPostagem}>HOME</ButtonEstilo>
      </DivButton>
    </HeaderContainer>
  );
};

export default Header;