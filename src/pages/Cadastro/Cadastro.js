import React from "react";
import { CustomForm, CustomInput, CustomLabel, CustomLink, FormContainer, TitleDoIt, CustomInputSubmit, PAlready } from './styled';
import Header from "../../components/Header/Header";

function Cadastro (){
    document.body.style.overflow = 'hidden';
    return(
    <>
    <Header/> 
    <FormContainer>
        <TitleDoIt>Welcome To Do It!</TitleDoIt>
        <CustomForm>
        <CustomLabel>Name</CustomLabel>
        <CustomInput type="text" id="usuario" placeholder="Fulano Ciclano" />
        
        <CustomLabel>Email</CustomLabel>
        <CustomInput type="text" id="email" placeholder="0632454567@senacrs.edu.br"/>

        <CustomLabel>Password</CustomLabel>
        <CustomInput type="password" id="senha" placeholder="Enter your password"/>
        
        <CustomInputSubmit class="submit" id="submit" value="Create account" type="submit"></CustomInputSubmit>

       </CustomForm>
       <PAlready>Already had? <CustomLink>Sign in</CustomLink></PAlready>
    </FormContainer>
    </>
    )
}

export default Cadastro;