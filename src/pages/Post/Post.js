import Header3 from "../../components/Header3/Header3"
import { TextoContainer, TituloContainer, DescContainer, PostContainer, ImgDiv, TextoDiv, TitutloDiv, PDiv1, ButtonChat } from "../Post/styled"

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
            <ImgDiv/>
            <PDiv1>
                <TitutloDiv>
                    INTERVENÇÃO
                </TitutloDiv>
                <TextoDiv>
                Uma intervenção promissora para auxiliar cidadãos marginalizados a ingressar no mercado de trabalho é a implementação de programas abrangentes de capacitação profissional e desenvolvimento de habilidades. Estes programas não apenas fornecem treinamento técnico adequado para as demandas do mercado, mas também se concentram no desenvolvimento de habilidades socioemocionais e na construção de autoconfiança. 
                </TextoDiv>
                <ButtonChat>    
                    CHAT
                </ButtonChat>
            </PDiv1>
        </PostContainer>
        </>
    )
}
export default Post
