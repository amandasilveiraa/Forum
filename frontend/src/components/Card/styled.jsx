import styled from "styled-components";

export const ContainerGrande = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    overflow-y: hidden;
    gap: 2vh;
    height: 43vh;
    padding: 5vh 5vh 0vh 5vh;
    height:100%;

    &::-webkit-scrollbar-track {
        border-radius: 15px;
        background-color: #FFFFFF;
      }
    
      /* Estilos para a barra de rolagem */
      &::-webkit-scrollbar {
        width: 1px;
        background-color: #FFFFFF;
      }
    
      /* Estilos para o thumb do scroll */
      &::-webkit-scrollbar-thumb {
        border-radius: 15px;
        box-shadow: inset 0 40 6px rgba(0, 0, 0, 0.3);
        background-color: #000000;        
        
      }

`

export const CardContainer = styled.button`
    width: 50vh;
    height: 40vh;
    flex-shrink: 0;
    border-radius:13px;
    border:0;
    bottom: 3vh;

    display:flex;
    flex-direction: row;
    position: relative;

`
export const ImagemContainer = styled.img`
    object-fit: cover;
    position:absolute;
    width: 50vh;
    height: 40vh;
    object-position: center bottom;
    border-radius: 3%;
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
    top:28vh;
`
