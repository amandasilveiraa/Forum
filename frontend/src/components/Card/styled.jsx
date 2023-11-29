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

// export const CardContainer = styled.button`
//     width: 50vh;
//     height: 40vh;
//     flex-shrink: 0;
//     border-radius:13px;
//     border:0;
//     bottom: 3vh;

//     display:flex;
//     flex-direction: row;
//     position: relative;

// `
// export const ImagemContainer = styled.img`
//     object-fit: cover;
//     position:absolute;
//     width: 50vh;
//     height: 40vh;
//     object-position: center bottom;
//     border-radius: 3%;
// `

// export const DescContainer = styled.h4`
//     color: #FFFFFF;
//     font-family: Nunito;
//     font-size: 30px;
//     font-style: normal;
//     font-weight: 700;
//     display:flex;
//     align-items:end;
//     margin-left:5vh;
//     position:absolute;
//     top:28vh;
// `

export const CardContainer = styled.div`
    width: 70vw;
    height: 30vh;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    font-family: 'Josefin Sans', sans-serif;
`

export const ContentCard = styled.div`
    grid-area: "ContentCard";
    display: grid;
    grid-template-columns: 100vw;
    grid-template-rows: 9vh 15vh 6vh;
    grid-template-areas:"HeaderContent"
                        "Content"
                        "FooterContent";

    border-radius: 10px;
`

export const HeaderContent =  styled.div`
    grid-area: "HeaderContent";
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;

    padding-left: 1.5vw;
    gap: 1vw;
`

export const Content = styled.div`
    grid-area: "Content";
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 3vw;
    padding-right: 2vw;

`

export const FooterContent = styled.div`
    grid-area: "FooterContent";
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;

    width: 70vw;

    border-radius: 0px 0px 10px 10px;

    padding-right: 1.5vw;
`

export const NameUserHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5vh;

    height: 8vh;
`

export const TempoPubli = styled.p`
    color: var(--base-mid-gray, #7A757D);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
`

export const ImageUserHeader = styled.img`
    width: 3vw;
`

export const ButtonContainer = styled.button`
    background: none;
    border: none;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.4vw;

    color: #00166A;
    font-weight: bold;
    font-size: x-small;
`

export const ButtonContainer2 = styled(ButtonContainer)`
    flex-direction: column;
    align-items: center;
`

export const BlueTextCard = styled.p`
    color: #00166A;
    font-weight: bold;
    font-size: x-small;
`

export const UserTextCard = styled.p`
    font-weight: bold;
    font-size: smaller;
`

export const MenssageImg = styled.img`
    width: 1.5vw;
`