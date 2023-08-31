import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* padding: 20px; */
    /* background-color: #a21515; */
`
export const DivLogo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center; /* Centraliza verticalmente */
    justify-content: flex; /* Centraliza horizontalmente */
    margin-left: -7%;
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