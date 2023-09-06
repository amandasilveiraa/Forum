import { useState } from 'react';
import Header from '../../components/Header/Header'
import { CustomForm, CustomInput, CustomInputSubmit, CustomLabel, CustomLink, FormContainer, TitleDoIt } from './styledLogin';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {

  document.body.style.overflow = 'hidden'; //  Corta o conteúdo que ultrapassa o tamanho da DIV
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(email)

  const navigate = useNavigate()

  const goToCadastro = () => {
    navigate('cadastro')
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
      goToCadastro()
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

          <CustomInputSubmit class="submit" id="submit" value="Enter" type="submit" />
          
        </CustomForm>

        <p>Not registred yet? <CustomLink href="">Create an account</CustomLink></p>

      </FormContainer>
      </>
  );
};

export default Login;