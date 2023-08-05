import styled from "styled-components";

export const TitleDoIt = styled.h1`
  margin-bottom: 20px;
`

export const FormContainer = styled.div`
  // border-radius: 30px;
  // margin-right: 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: blue;
`
export const CustomForm = styled.form`
  background-color: pink;
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 45vh;
  gap: 1vh;
`

export const CustomInput = styled.input`
  height: 7vh;
  border: none;
  border-radius: 20px;
  background-color: #D9D9D9;
  margin-bottom: 5px;
  ::placeholder {
    color: blue;
    font-style: italic;
  }
`;

export const CustomLabel = styled.label`
  margin-top: 4vh;
`

export const CustomLink = styled.a`
  text-decoration: none;
  color: #030202;
  ::hover {
    font-weight: bold;
  }
`