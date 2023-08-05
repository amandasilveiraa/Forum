import React from 'react';
import { CustomForm, CustomInput, CustomLabel, CustomLink, FormContainer, TitleDoIt } from './styled';

function Login(){
  return (
    <FormContainer>
      <TitleDoIt>Welcome Back To Do It!</TitleDoIt>
      <CustomForm>
        <CustomLabel>Email</CustomLabel>
        <CustomInput type="text" id="usuario" />
        
        <CustomLabel>Password</CustomLabel>
        <CustomInput type="password" id="senha" />
        
        <CustomInput class="submit" id="submit" value="Entrar" type="submit">Login</CustomInput>

      </CustomForm>
      <p>Not registred yet? <CustomLink href="">Create an account</CustomLink></p>
    </FormContainer>
  );
};

export default Login;