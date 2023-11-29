import { useState } from 'react';
import Header from '../../components/Header/Header'
import { CustomForm, CustomInput, CustomInputSubmit, CustomLabel, CustomLink, FormContainer, TitleDoIt } from './styled';
import { useNavigate } from 'react-router-dom';
import { url } from '../../constants/url';

function Login() {

  document.body.style.overflow = 'hidden'; //  Corta o conteúdo que ultrapassa o tamanho da DIV
  
  const navigate = useNavigate()
  
  function goToPostagem() {
      navigate('/postagem')
  }

  function goToCadastro() {
    navigate('/cadastro')
}

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
      e.preventDefault();
      
      const data = {
        email,
        password
      };

      try{
        console.log("oiii", data);
        const response = await url.post('/auth/login', data);

        // console.log("oiii",response.data);

        if (response.data.success === true) {
            console.log("User connected!");
            alert('Login concluído!');
            // redireciona para home
            localStorage.setItem("@Auth:user", JSON.stringify(response.data.data.name));
            const userId = response.data.data.id;
            const userEmail = response.data.data.email;

            localStorage.setItem("@Auth:id", userId);
            localStorage.setItem("@Auth:email", userEmail);

            goToPostagem()
        } else {
            alert('Não foi possível entrar.');
        }     

      } catch(error){
          console.log(error)
      }
  };
  
  return (
    <>
      <Header />
      <FormContainer>
        
        <TitleDoIt>Welcome back to Do It!</TitleDoIt>

        <CustomForm>

          <CustomLabel>Email</CustomLabel>
          <CustomInput
            placeholder="0632454567@senacrs.edu.br"
            type='email'
            value={email}
            onChange={(e) => [setEmail(e.target.value)]}
          />
          
          <CustomLabel>Password</CustomLabel>
          <CustomInput
            placeholder="Enter your password"
            type='password'
            value={password}
            onChange={(e) => [setPassword(e.target.value)]}
            />

            <CustomInputSubmit onClick={handleLogin}>Entrar</CustomInputSubmit>
        </CustomForm>

        <p>Not registred yet? <CustomLink  onClick={goToCadastro}>Create an account</CustomLink></p>

      </FormContainer>
      </>
  );
};

export default Login;