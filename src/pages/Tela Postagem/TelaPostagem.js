import Card from "../../components/Card/Card";
import { ContainerGrande } from "../../components/Card/styled";
import { TituloContainer,  } from "./styled";

function Postagem() {

    return(
    <>
    <TituloContainer>Introdução ao mercado de trabalho</TituloContainer>
    {/* <EscritaContainer>OII</EscritaContainer> */}
    <ContainerGrande>
      <Card/>
      <Card/>
      <Card/>
    </ContainerGrande> 
    </>
    )
  }
  
  export default Postagem;