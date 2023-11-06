
import styled from 'styled-components';


export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export const Header = styled.header`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`

export const MainContent = styled.div`
  display: flex;
  width: 100%;
`

export const LeftDiv = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #fcfcfc;
  width: 3vw;
  height: 10vh;
`

export const CenterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;
`

export const BackArrow = styled.div`
  width: 30px;
  height: 30px;
  background-color: #fefefe;
  color: #000000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 20px;
`


export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`


export const RightDiv = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  align-items: center;
`


export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`


export const Card1 = styled.div`
  flex: 1;
  background-color: #f0f0f0;
  border-radius: 35px;
  padding: 20px;
  text-align: center;
  margin-right: 10px;
  width: 35vw;
  height: 50vh;
`

export const Card2 = styled.div`
  flex: 1;
  background-color: #f0f0f0;
  border-radius: 35px;
  padding: 20px;
  text-align: center;
  margin-right: 10px;
  width: 35vw;
  height: 50vh;
`

export const DropFileHere = styled.div`
  background-color: #f0f0f0;
  border-radius: 35px;
  padding: 20px;
  text-align: center;
  margin-top: 20px;
  width: 71vw;
  height: 30vh;
`
export const H1conteiner2 = styled.h3`   
  display: flex;
  text-indent: flex-start;
  justify: left;
  margin-top: 5vh;
  width: 16vw;
  text-align: left;
  margin-left: 2vw;
`
export const H3container1 = styled.h3`  
  display: flex;
  text-indent: flex-start;
  justify: left;
  margin-top: 5vh;
  width: 13vw;
  text-align: left;
  margin-left: 2vw;
`
export const TextContainer1 = styled.input` 
    text-align: left;  
    margin-top: 5vh;
    display: flex;
    flex-direction: row;
    align-items: left; /* Centraliza verticalmente */
    justify-content: left; /* Centraliza horizontalmente */
    width: 80%;
    border-style: none;
    background-color: transparent;
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 500;
    color:#000000;
    margin-left: 2vw;
    ::placeholder {
        
    }
    margin-left: 1vw;
    &:focus { 
        outline: 0;
    }

`

export const TextContainer2 = styled.input`   
    text-align: left;  
    margin-top: 5vh;
    display: flex;
    flex-direction: row;
    align-items: left; /* Centraliza verticalmente */
    justify-content: left; /* Centraliza horizontalmente */
    width: 80%;
    border-style: none;
    background-color: transparent;
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 500;
    color:#000000;
    margin-left: 2vw;
    ::placeholder {
        
    }
    margin-left: 1vw;
    &:focus { 
        outline: 0;
    }

`
export const Drop = styled.img`
  width: 10vw;
  height: 12vh;
  border-radius: 50%;
`