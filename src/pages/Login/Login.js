import { useState } from 'react';
import Header from '../../components/Header/Header'
import { CustomForm, CustomInput, CustomInputSubmit, CustomLabel, CustomLink, FormContainer, TitleDoIt } from './styled';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Login() {

  document.body.style.overflow = 'hidden'; //  Corta o conteúdo que ultrapassa o tamanho da DIV
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(email)

  const navigate = useNavigate()

  const saveUserInfoLocalStorage = (token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
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
      saveUserInfoLocalStorage(response.data.token)
      navigate('postagem')
      
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

        <p>Not registred yet? <CustomLink>
          <Link to ="/TelaPostagem">
          Create an account
          </Link>
          </CustomLink></p>

      </FormContainer>
      </>
  );
};

export default Login;