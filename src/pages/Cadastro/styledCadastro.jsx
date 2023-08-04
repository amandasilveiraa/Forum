import styled from 'styled-components'

export const TituloCadastro = styled.h1`
    color: #000;
    text-align: center;
    font-family: Nunito;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 68px;
    margin-top: 8%;
`
export const DivBotoes = styled.div`
    grid-area: form;
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const FormularioCadastro = styled.form`
    width: 35vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 30px;
    margin-right: 5vw;
`
export const InputForm = styled.input`
    height: 7vh;
    border: none;
    border-radius: 9px;
    background-color: #017257;
    input:hover:is([type = 'submit']){
    border: 0.2vw black solid;}
    input:focus{
    outline: 0;
    padding-left: 0.5vw;}
`
export const LabelCadastro = styled.label`
    margin-top: 4vh;
`
export const BotaoEntrar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 15vh;
`
