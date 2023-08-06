import styled from "styled-components";

export const ContainerGrande = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;

`

export const CardContainer = styled.div`
    width: 30vw;
    height: 45vh;
    flex-shrink: 0;
    background-color:#000000;
    margin-left:2vh;
    margin-right:1vh;

    border-radius: 41px;
    display:flex;
    flex-direction:row;
    position: relative;

`
export const ImagemContainer = styled.img`
    object-fit: cover;
    position:absolute;
    width: 100%;
    height: 100%;
    object-position: center bottom;
`

export const DescContainer = styled.h4`
    color: #FFFFFF;
    font-family: Nunito;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    display:flex;
    align-items:end;
    margin-left:5vh;
    position:absolute;
    top:39vh;
`
export const SetaImg = styled.img`
`