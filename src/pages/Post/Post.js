import Header3 from "../../components/Header3/Header3"
import { TextoContainer, TituloContainer, DescContainer, PostContainer, ImgContainer, ImgDiv, TextoDiv, TitutloDiv, PDiv1 } from "./styled"
import Imgtrend from '../../assets/dedfdb7cb31cbccc1410706ca26819c8.jpg'

function Post(){

    return(
        <>
        <Header3/>
        <TextoContainer>    
        <TituloContainer>Introdução ao mercado de trabalho
        </TituloContainer>
            <DescContainer>
            Venha participar do nosso fórum dedicado a discutir a inserção do cidadão no mercado de trabalho! Juntos, podemos compartilhar experiências, ideias e soluções para os desafios enfrentados por aqueles que buscam oportunidades profissionais. Seja você um estudante em busca do primeiro emprego, um profissional em transição de carreira ou um empregador disposto a oferecer oportunidades, o nosso espaço é aberto e acolhedor para todos.
            </DescContainer>
        </TextoContainer>
        <PostContainer>
            <ImgDiv>
            <ImgContainer src={Imgtrend} alt=""/>
            </ImgDiv>
        <PDiv1>
            <TitutloDiv>
                oiii
            </TitutloDiv>
            <TextoDiv>
                etc etc
            </TextoDiv>
        </PDiv1>
        </PostContainer>
        </>
    )
}
export default Post
