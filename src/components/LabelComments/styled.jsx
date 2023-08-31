import styled from "styled-components";


export const CustomInput = styled.input`
    position: absolute;
    background-color: #D9D9D9;
    display: inline-block;
    width: 50%;
    border-radius: 45px;
    height: 8vh;
    border: none;
    border-radius: 41px;
    background-color: #D9D9D9;
    border: 0 none;
    padding: 0px 16px 0px;
    ::placeholder {
        color: blue;
        font-style: italic;
        }
`

export const CustomInputSubmit = styled.input`
    float: right;
    height: 8vh;
    width: 25%;
    border-radius: 41px;
    border: none;
    margin-right: 5.5%;
    background-color: black;
    color: white;
`