import { useState } from 'react';
import Header from '../../components/Header/Header'
import { CustomForm, CustomInput, CustomInputSubmit, CustomLabel, CustomP, FormContainer, TitleDoIt } from './styled';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Cadastro() {

  document.body.style.overflow = 'hidden'; //  Corta o conteúdo que ultrapassa o tamanho da DIV
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(email)

  const navigate = useNavigate()

  const goToHome = () => {
    navigate('/login')
  }

  const hadleSubmit = (e) => {
    e.preventDefault()

    const credentials = { email, password } 
    
    axios
    .post('http://localhost:8000/login', credentials, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      alert(response.data.message)
      goToHome()
    })
    .catch(error => console.log(error))
    
  };
  
  return (
    <>
      <Header />
      <FormContainer>
        
        <TitleDoIt>Welcome back to Do It!</TitleDoIt>

        <CustomForm onSubmit={hadleSubmit}>

          <CustomLabel>Email</CustomLabel>
          <CustomInput
            type="text"
            id="usuario"
            placeholder="0632454567@senacrs.edu.br"
            value={email}
            onChange = {(e) => setEmail(e.target.value)}
          />
          
          <CustomLabel>Password</CustomLabel>
          <CustomInput type="password"
            id="senha"
            placeholder="Enter your password"
            value={password} 
            onChange = {(e) => setPassword(e.target.value)}  
          />

          <CustomLabel>Confirm password</CustomLabel>
          <CustomInput type="password"
            id="senha"
            placeholder="Confirm your password"
            value={password} 
            onChange = {(e) => setPassword(e.target.value)}  
          />

          <CustomInputSubmit class="submit" id="submit" value="Enter" type="submit" />

          <CustomP>Already had? <Link to ="/Home"> Sign in </Link> </CustomP>
          
        </CustomForm>

      </FormContainer>
      </>
  );
};

export default Cadastro;