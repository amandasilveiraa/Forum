import styled from "styled-components";

export const TitleDoIt = styled.h1`
  margin-bottom: 5vh;
  font-size: 8vh;
`

export const FormContainer = styled.div`
  border-radius: 30px;
  margin-right: 10vw;
  margin-left: 10vw;
  margin-top: -9vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
export const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 55vh;
  gap: .5vh;
`

export const CustomInput = styled.input`
  height: 20vh;
  border: none;
  border-radius: 30px;
  background-color: #D9D9D9;
  margin-bottom: 5px;
  border: 0 none;
  padding: 0px 16px 0px;
  ::placeholder {
    color: blue;
    font-style: italic;
  }
`
export const CustomInputSubmit = styled.input`
  background-color:#030202;
  color: white;
  font-size: 2vh;
  height: 20vh;
  border: none;
  border-radius: 30px;
  margin-bottom: 5px;
  margin-top: 3vh;
  gap: 2vh;
  border: 0 none;
  padding: 0px 16px 0px;
  box-shadow: 0 0 0 0;
  outline: 0;
`

export const CustomLabel = styled.label`
  margin-top: 1vh;
  font-size: 20px
`
export const PAlready = styled.p`
    margin-top: 5vh;
    font-size: 2.5vh;
`

export const CustomLink = styled.a`
  text-decoration: none;
  color: #030202;
  ::hover {
    font-weight: bold;
  }
`