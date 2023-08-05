import Card from "../../components/Card/Card";
import { ContainerGrande } from "../../components/Card/styled";
import Header2 from "../../components/Header2/Header2";
import { DescContainer, TituloContainer, TextoContainer } from "./styled";

function Postagem() {
  
    return(
    <>
    <Header2/>
    <TextoContainer>    
    <TituloContainer>Introdução ao mercado de trabalho</TituloContainer>
    <DescContainer>Venha participar do nosso fórum dedicado a discutir a inserção do cidadão no mercado de trabalho! Juntos, podemos compartilhar experiências, ideias e soluções para os desafios enfrentados por aqueles que buscam oportunidades profissionais. Seja você um estudante em busca do primeiro emprego, um profissional em transição de carreira ou um empregador disposto a oferecer oportunidades, o nosso espaço é aberto e acolhedor para todos.</DescContainer>
    </TextoContainer>
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