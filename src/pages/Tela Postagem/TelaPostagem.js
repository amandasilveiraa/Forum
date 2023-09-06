import { useNavigate } from "react-router-dom";
import { DescContainer, TituloContainer, TextoContainer, DivPublic, DivImg, ButtonEstilo } from "./styled";

import Card from "../../components/Card/Card";
import { ContainerGrande } from "../../components/Card/styled";
import Header2 from "../../components/Header2/Header2";

import PublicImg from "../../assets/add_box_FILL0_wght400_GRAD0_opsz48.png"
import TrabalhadorAmbulante from "../../assets/TrabalhadorAmbulante.jpg"
import PeleFutebol from "../../assets/PeleFutebol.jpg"

function Postagem() {

    const navigate = useNavigate()
    const goToPost = () => {
      navigate('/post')
    }

    const postContent = [
      {
        PostImage: TrabalhadorAmbulante,
        PostDescription: "Título da postagem 1"
      },
      {
        PostImage: TrabalhadorAmbulante,
        PostDescription: "Título da postagem 2"
      },
      {
        PostImage: PeleFutebol,
        PostDescription: "Título da postagem 3"
      },
      {
        PostImage: PeleFutebol,
        PostDescription: "Título da postagem 4"
      },
    ]
    return(
    <>
    <Header2/>
    <TextoContainer>    
    <TituloContainer>Introdução ao mercado de trabalho</TituloContainer>
    <DescContainer>Venha participar do nosso fórum dedicado a discutir a inserção do cidadão no mercado de trabalho! Juntos, podemos compartilhar experiências, ideias e soluções para os desafios enfrentados por aqueles que buscam oportunidades profissionais. Seja você um estudante em busca do primeiro emprego, um profissional em transição de carreira ou um empregador disposto a oferecer oportunidades, o nosso espaço é aberto e acolhedor para todos.</DescContainer>
    </TextoContainer>
    <DivPublic>
      <ButtonEstilo onClick={goToPost}>    
        <DivImg src={PublicImg} alt=""/>
      </ButtonEstilo>
    </DivPublic>
    <ContainerGrande>
      <Card postContent={postContent}/>
    </ContainerGrande> 
    </>
    )
  }
  
  export default Postagem;