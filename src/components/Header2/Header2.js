import React from 'react';
import logoImg from '../../assets/logoTeste.svg'
import searchImg from '../../assets/search.png'
import { ButtonEstilo, DivButton, DivLeft, DivLogo, DivMenu, HeaderContainer, ImgLogo, ImgSearch } from './styled';
import MenuLeft from "../../assets/drag_handle_FILL0_wght400_GRAD0_opsz48.png"
import { useNavigate } from 'react-router-dom';

function Header2() {
  
  const navigate = useNavigate()
  
  const hadleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    navigate('/')
  }

  return (
    <HeaderContainer>
      <DivLeft>
    <ButtonEstilo onClick={hadleLogout}>
        <DivMenu src={MenuLeft} alt="Logout"/>
    </ButtonEstilo>
      </DivLeft>
      <DivLogo>
        <ImgLogo src={logoImg} alt="Logo"/>
      </DivLogo>
      <DivButton>
        <ButtonEstilo>
        <ImgSearch src={searchImg} alt="procurar"/>
        </ButtonEstilo>
      </DivButton>
    </HeaderContainer>
  );
};

export default Header2;