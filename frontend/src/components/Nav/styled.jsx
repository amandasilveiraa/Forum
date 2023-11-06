import styled from 'styled-components';

export const SidebarContainer = styled.div`
  height: 100vh;
  background-color: #333;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  transition: width 0.3s ease;
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

export const ProfileImage = styled.img`
  width: 5vw;
  height: 10vh;
  border-radius: 50%;
  margin-right: 10px;
`;

export const TitleSubtitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-family: Archivo Black;
  font-size: 1rem;
  margin: 0;
  color: black;
`;

export const Subtitle = styled.h2`
  font-size: 0.5rem;
  font-family: Nunito;
  opacity: 10;
  margin: 0;
  color: black;
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 5vh;
`;

export const aCustom = styled.a`
  font-family: Nunito;

`

export const SidebarMenuItem = styled.li`
  padding: 10px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

export const LogoutButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  margin-top: 45vh;
`;