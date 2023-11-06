import styled from "styled-components";
import Imgtrend from '../Post/vendedor-ambulante.jpg'

export const TextoContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const TituloContainer = styled.h3`
    width: 35vw;
    height: 32vh;
    color: #000;
    font-family: Nunito;
    font-size: 55px;
    font-style: normal;
    font-weight: 700;
    line-height: 10vh; /* 104.615% */
    
    display:flex;
    margin-left: 30vh;
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
    margin-top:5vh;

`

export const PostContainer = styled.div`
    width: 95vw;
    flex-shrink: 0;
    margin-left:4vh;
    display: grid;
    grid-template-areas: "photo text";
    grid-template-columns: 50% 50%;
    grid-template-rows: 50vh;
`
export const ImgDiv = styled.div`
    grid-area: photo;
    border: 1px 0px 0px 1px;
    border-color: white;
    border-radius: 41px 0px 0px 41px;
    background-image: url(${Imgtrend});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
`

export const TextoDiv = styled.div`
    color: #000;
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    width:39vw;
    text-align:justify;
    
`
export const TitutloDiv = styled.h1`
    color: #000;
    font-family: Nunito;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
`    
export const PDiv1 = styled.div`
    grid-area: text;
    display: flex;
    flex-direction: column;
    padding-left: 10%;
    padding-top: 3vh;
    align-items: flex-start; 
    background-color:#D9D9D94F;
    border: 0px 1px 1px 0px;
    border-color: white;
    border-radius: 0px 41px 41px 0px;
`

export const ButtonChat = styled.button`
    width: 143px;
    height: 41px;
    border-radius: 25.5px;
    background-color:#000;
    color: white;
    margin-top:1vh;
    margin-left:60vh;
`