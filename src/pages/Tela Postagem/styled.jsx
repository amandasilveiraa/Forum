import styled from "styled-components";

export const TextoContainer = styled.div`
    display: flex;
    flex-direction: row;

`

export const TituloContainer = styled.h3`
    width: 30vw;
    height: 37vh;
    color: #000;
    font-family: Nunito;
    font-size: 55px;
    font-style: normal;
    font-weight: 700;
    line-height: 68px; /* 104.615% */
    
    display:flex;
    margin-left: 35vh;
   `

export const DescContainer = styled.p`
    width: 29vw;
    color: #000000;
    font-family: Nunito;
    font-size: 2vh;
    line-height:2.9vh;
    font-weight:400;
    letter-spacing: -0.38px;
    margin-left: 15vh;
    margin-top:3vh;

`

export const ImagemContainer = styled.img`
    object-fit: cover;
    position:absolute;
    width: 100%;
    height: 100%;
`