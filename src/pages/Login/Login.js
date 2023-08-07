import React from 'react';
import { CustomForm, CustomInput, CustomInputSubmit, CustomLabel, CustomLink, FormContainer, TitleDoIt } from './styledLogin';

function Login() {
  document.body.style.overflow = 'hidden'; //  Corta o conteúdo que ultrapassa o tamanho da DIV
  
  return (
    <FormContainer>
      
      <TitleDoIt>Welcome back to Do It!</TitleDoIt>

      <CustomForm>

        <CustomLabel>Email</CustomLabel>
        <CustomInput type="text" id="usuario" placeholder="0632454567@senacrs.edu.br" />
        
        <CustomLabel>Password</CustomLabel>
        <CustomInput type="password" id="senha" placeholder="Enter your password" />

        <CustomInputSubmit class="submit" id="submit" value="Enter" type="submit" />
        
      </CustomForm>

      <p>Not registred yet? <CustomLink href="">Create an account</CustomLink></p>

    </FormContainer>
  );
};

export default Login;