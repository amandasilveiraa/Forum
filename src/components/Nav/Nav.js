import React from 'react';
import imgProfile from '../../assets/profile.svg'
import { aCustom, LogoutButton, ProfileImage, SidebarContainer, SidebarHeader, SidebarMenu, SidebarMenuItem, Subtitle, Title, TitleSubtitleWrapper } from './styled';

function Sidebar() {

  return (
    <SidebarContainer>
      <SidebarHeader>
        <ProfileImage src={imgProfile} alt="Profile" />
        <TitleSubtitleWrapper>
          <Title>Angela Koch</Title>
          <Subtitle>justoritter@gmail.com.br</Subtitle>
        </TitleSubtitleWrapper>
      </SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <aCustom href="#">Visualizar perfil</aCustom>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <aCustom href="#">Trocar de conta</aCustom>
        </SidebarMenuItem>
      </SidebarMenu>
      <LogoutButton>Logout</LogoutButton>
    </SidebarContainer>
  );
}

export default Sidebar;
