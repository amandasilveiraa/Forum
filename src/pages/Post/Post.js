import Header3 from "../../components/Header3/Header3"
import { TextoContainer, TituloContainer, DescContainer, PostContainer } from "./styled"

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
            
        </PostContainer>
        </>
    )
}
export default Post
