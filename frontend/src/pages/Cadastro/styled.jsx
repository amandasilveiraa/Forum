import styled from "styled-components";

export const TitleDoIt = styled.h1`
  font-size: 7vh;
  font-family: Nunito;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`

export const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 4vh;
  align-items: center;
  width:40vw;
`

export const CustomInput = styled.input`
  background-color: #D9D9D9;
  height: 7vh;
  width: 30vw;
  border: none;
  border-radius: 20px;
  margin-bottom: 5px;
  padding: 10px;
  color: black;

  ::placeholder {
    margin-right: 5px;
    padding: 10px;
  }

`;

export const CustomInputSubmit = styled.button`
  height: 7vh;
  width: 30vw;
  border: none;
  border-radius: 20px;
  margin-bottom: 5px;
  margin-top: 5vh;
  background-color: #030202;
  color: white;
  font-weight: bold;
  cursor: pointer;
  font-family: Nunito;
`

export const CustomLabel = styled.label`
  margin-top: 2vh;
  font-weight: bold;
  color: black;
  font-family: Nunito;
`

export const CustomP = styled.p`
  font-family: Nunito;
  font-weight: bold;
`

export const CustomLink = styled.a`
  text-decoration: none;
  color: #030202;
  font-weight: bold;
  cursor: pointer;
  font-family: Nunito;
    a:visited {
      color: black;
    }
  
`