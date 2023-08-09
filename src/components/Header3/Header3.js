import React from 'react';
import logoImg from '../../assets/logoTeste.svg'
import { ButtonEstilo, DivButton, DivLeft, DivLogo, DivMenu, HeaderContainer, ImgLogo } from './styled';
import voltar from '../../assets/arrow_back_ios_FILL0_wght400_GRAD0_opsz48 2.svg'

function Header3 () {
  const handleButtonClick = () => {
    // Troca para a outra página quando o botão for clicado
    window.location.href = '';
  };

  const handleButtonClick1 = () => {
    // Troca para a outra página quando o botão for clicado
    window.location.href = '';
  };

  return (
    <HeaderContainer>
      <DivLeft>
    <ButtonEstilo onClick={handleButtonClick1}>
        <DivMenu src={voltar} alt="Voltar"/>
    </ButtonEstilo>
      </DivLeft>
      <DivLogo>
        <ImgLogo src={logoImg} alt="Logo"/>
      </DivLogo>
      <DivButton>
        <ButtonEstilo onClick={handleButtonClick}>
        </ButtonEstilo>
      </DivButton>
    </HeaderContainer>
  );
};

export default Header3;