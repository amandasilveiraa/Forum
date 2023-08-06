import Card from "../../components/Card/Card";
import { ContainerGrande } from "../../components/Card/styled";
import Header2 from "../../components/Header2/Header2";
import { DescContainer, TituloContainer, TextoContainer, DivPublic, DivImg, ButtonEstilo } from "./styled";
import PublicImg from "../../assets/add_box_FILL0_wght400_GRAD0_opsz48.png"


function Postagem() {
  const handleButtonClickPublic = () => {
    // Troca para a outra página quando o botão for clicado
    window.location.href = '';
  };

    return(
    <>
    <Header2/>
    <TextoContainer>    
    <TituloContainer>Introdução ao mercado de trabalho</TituloContainer>
    <DescContainer>Venha participar do nosso fórum dedicado a discutir a inserção do cidadão no mercado de trabalho! Juntos, podemos compartilhar experiências, ideias e soluções para os desafios enfrentados por aqueles que buscam oportunidades profissionais. Seja você um estudante em busca do primeiro emprego, um profissional em transição de carreira ou um empregador disposto a oferecer oportunidades, o nosso espaço é aberto e acolhedor para todos.</DescContainer>
    </TextoContainer>
    <DivPublic>
      <ButtonEstilo onClick={handleButtonClickPublic}>    
        <DivImg src={PublicImg} alt=""/>
      </ButtonEstilo>
    </DivPublic>
    <ContainerGrande>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </ContainerGrande> 
    </>
    )
  }
  
  export default Postagem;