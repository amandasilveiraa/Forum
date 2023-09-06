import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* padding: 20px; */
    /* background-color: #a21515; */
`

export const DivLeft = styled.div`
    display: flex;
    flex-direction: row;
    align-items: left; /* Centraliza verticalmente */
    justify-content: left; /* Centraliza horizontalmente */
`
export const DivMenu = styled.img`
    width: 2vw;
    height: 5vh;
    margin-left: 9vh;
`
export const DivLogo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center; /* Centraliza verticalmente */
    justify-content: center; /* Centraliza horizontalmente */
    /* background-color: blue; */
    margin-left: 5%;

`

export const ImgLogo = styled.img`
    width: 30vw;
    height: 15vh;
`

export const DivButton = styled.div`
    text-align: center;
    border: none;
    margin-right: 5%;
    margin-bottom: 0.5%;
`

export const ButtonEstilo = styled.button`
    background: none;
    border: none;
    font-weight: regular;
    text-decoration: none;
`

export const ImgSearch = styled.img`
    width:28px;

`