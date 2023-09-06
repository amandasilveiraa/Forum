import React from 'react';
import logoImg from '../../assets/logoTeste.svg'
import { ButtonEstilo, DivButton, DivLeft, DivLogo, DivMenu, HeaderContainer, ImgLogo } from './styled';
import voltar from '../../assets/arrow_back_ios_FILL0_wght400_GRAD0_opsz48 2.svg'
import { useNavigate } from "react-router-dom";

function Header3 () {
  const navigate = useNavigate();

  const goToTelaPostagem = () => {
    navigate('/')
  }

  return (
    <HeaderContainer>
      <DivLeft>
    <ButtonEstilo onClick={goToTelaPostagem}>
        <DivMenu src={voltar} alt="Voltar"/>
    </ButtonEstilo>
      </DivLeft>
      <DivLogo>
        <ImgLogo src={logoImg} alt="Logo"/>
      </DivLogo>
      <DivButton>
        <ButtonEstilo>
        </ButtonEstilo>
      </DivButton>
    </HeaderContainer>
  );
};

export default Header3;