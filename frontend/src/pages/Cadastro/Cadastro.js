import { useState } from 'react';
import Header from '../../components/Header/Header'
import { CustomForm, CustomInput, CustomInputSubmit, CustomLabel, CustomP, FormContainer, TitleDoIt } from './styled';
import { useNavigate } from 'react-router-dom';
import { url } from '../../constants/url'

function Cadastro() {

  document.body.style.overflow = 'hidden'; //  Corta o conteúdo que ultrapassa o tamanho da DIV
  
  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); 

  const isButtonDisabled = password !== confirmPassword;

  const registerUser = async (e) => {
      e.preventDefault();
      const data = {
        name:name,
        email:email,
        password:password,
      };
      try {
        await url.post("/user/create", data);
        console.log("Usuário criado com sucesso!");
  
        navigate('/')
      } catch (error) {
        console.error("Erro ao fazer login:", error);
        setError("Credenciais inválidas. Verifique seu email e senha.");
      }
    };


  return (
    <>
      <Header />
      <FormContainer>
        
        <TitleDoIt>Welcome to Do It!</TitleDoIt>

        <CustomForm onSubmit={registerUser}>

        <CustomLabel>Name</CustomLabel>
          <CustomInput
            type='text'
            value={name} 
            onChange={(e) => setName(e.target.value)}
            required

          />

          <CustomLabel>Email</CustomLabel>
          <CustomInput
            type='email'
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required

          />
          
          <CustomLabel>Password</CustomLabel>
          <CustomInput
            type='password'
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required

          />

          <CustomLabel>Confirm password</CustomLabel>
          <CustomInput
            type='password'
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {error ?
              <div>
                  <label>{error}</label>
                  <CustomInputSubmit type="submit" value="Cadastrar" disabled={isButtonDisabled}/>
              </div>
              :
              <div>
                  <CustomInputSubmit type="submit" value="Cadastrar" />
              </div>
          }

          {/* <CustomP onClick={goToLogin}>Already had? Sign in!</CustomP> */}
          
        </CustomForm>

      </FormContainer>
      </>
  );
};

export default Cadastro;