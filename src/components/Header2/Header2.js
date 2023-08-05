import React from 'react';
import logoImg from '../../assets/logoTeste.svg'
import searchImg from '../../assets/search.png'
import { ButtonEstilo, DivButton, DivLeft, DivLogo, DivMenu, HeaderContainer, ImgLogo, ImgSearch } from './styled';
import MenuLeft from "../../assets/drag_handle_FILL0_wght400_GRAD0_opsz48.png"

function Header2 () {
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
        <DivMenu src={MenuLeft} alt="procurarrrrrr"/>
    </ButtonEstilo>
      </DivLeft>
      <DivLogo>
        <ImgLogo src={logoImg} alt="Logo"/>
      </DivLogo>
      <DivButton>
        <ButtonEstilo onClick={handleButtonClick}>
        <ImgSearch src={searchImg} alt="procurar"/>
        </ButtonEstilo>
      </DivButton>
    </HeaderContainer>
  );
};

export default Header2;