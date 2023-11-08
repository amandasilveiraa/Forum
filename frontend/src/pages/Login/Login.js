import { useState } from 'react';
import Header from '../../components/Header/Header'
import { CustomForm, CustomInput, CustomInputSubmit, CustomLabel, CustomLink, FormContainer, TitleDoIt } from './styled';
import { url } from '../../constants/url'
import { useNavigate } from 'react-router-dom';

function Login() {

  document.body.style.overflow = 'hidden'; //  Corta o conteúdo que ultrapassa o tamanho da DIV
  
  const navigate = useNavigate()
    
    function goToCadastro() {
        navigate('/cadastro')
    }

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        
        const data = {
          name,
          password
        };

        console.log('---------> dada', data)

        try {
            const response = await url.post("/auth/login", data);
    
            console.log('***********response: ', response)

            if (response.data.success === true) {
                console.log("User connected!");
    
                url.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${response.data.data.token}`;
    
                localStorage.setItem("@Auth:user", JSON.stringify(response.data.data.name));
                localStorage.setItem("@Auth:token", response.data.data.token);
                const userId = response.data.data.id;

                localStorage.setItem("@Auth:user_id", userId);
    
                navigate('/home');
            } else {
                setError("Credenciais inválidas. Verifique seu nome e senha.");
            }
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            setError("Credenciais inválidas. Verifique seu nome e senha.");
        }
    };

  
  return (
    <>
      <Header />
      <FormContainer>
        
        <TitleDoIt>Welcome back to Do It!</TitleDoIt>

        <CustomForm onSubmit={handleLogin}>

          <CustomLabel>Email</CustomLabel>
          <CustomInput
            placeholder="0632454567@senacrs.edu.br"
            type='text'
            value={name}
            onChange={(e) => [setName(e.target.value), setError("")]}
          />
          
          <CustomLabel>Password</CustomLabel>
          <CustomInput
            placeholder="Enter your password"
            type='password'
            value={password}
            onChange={(e) => [setPassword(e.target.value), setError("")]}
            />
          {error ? 
              <div>
                  <label>{error}</label>
                  <CustomInputSubmit onClick={handleLogin} disabled>Entrar</CustomInputSubmit>
              </div>
          :
              <div>
                  <CustomInputSubmit onClick={handleLogin}>Entrar</CustomInputSubmit>
              </div>
          }
        </CustomForm>

        <p>Not registred yet? <CustomLink  onClick={goToCadastro}>Create an account</CustomLink></p>

      </FormContainer>
      </>
  );
};

export default Login;