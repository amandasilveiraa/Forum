import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../../constants/url";
import { BackArrow, Card1, Drop, Card2, CardContainer, H3container1, H1conteiner2, CenterDiv, DropFileHere, Header, LeftDiv, MainContent, PageWrapper, RightDiv, Image, TextContainer1, TextContainer2 } from "./styled";


function CriarPostagem() {

  const navigate = useNavigate();

  function goToPostScreen() {
    navigate(`/postagem`);
}

  
  const [name, setTitulo] = useState()
  const [descricao, setDescricao] = useState()
  const userPost_id = localStorage.getItem("@Auth:id")

  const handleClick = async (e) => {
      e.preventDefault();
      const formData = {
          name,
          descricao,
          userPost_id
      }
      try {
          await url.post('/posts/create', formData)
          window.location.reload();
      } catch (error) {
        console.error("Erro ao criar artigo:", error);
      }
    };

    return (

      <PageWrapper>
        <Header>Header</Header>

        <MainContent>
          <LeftDiv>
            <BackArrow></BackArrow>
          </LeftDiv>

          <CenterDiv>
            <Image  alt="Imagem de perfil" />
          </CenterDiv>

          <RightDiv>
            <p>Crie sua própria postagem!</p>
          </RightDiv>
        </MainContent>

        <CardContainer>
            <Card1>
                <H3container1> Escreva o titulo da sua postagem </H3container1>
                <TextContainer1 
                      value={name} 
                      onChange={(e) => setTitulo(e.target.value)}
                      placeholder="Digite aqui seu titulo"
                />
            </Card1>
            <Card2>
                <H1conteiner2>Escreva um texto para a sua postagem</H1conteiner2>
                <TextContainer2 
                      value={descricao} 
                      onChange={(e) => setDescricao(e.target.value)} 
                      placeholder="Descreva o seu assunto"
                />
            </Card2>
        </CardContainer>
<button onClick={handleClick}>Salvar</button>
<button onClick={goToPostScreen}>Voltar</button>
        <DropFileHere>
            <Drop alt="imagemdrop" />
            Drop file here
        </DropFileHere>

      </PageWrapper>
    );
  };

 

  export default CriarPostagem;