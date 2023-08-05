import  { CardContainer, ImagemContainer, DescContainer, SetaImg }  from "./styled"
import ContainerImagem from '../../assets/dedfdb7cb31cbccc1410706ca26819c8.jpg'
// import FotoFosca from "../../assets/dedfdb7cb31cbccc1410706ca26819c8.jpg" 
import ImgSeta from "../../assets/arrow_forward_FILL0_wght400_GRAD0_opsz48.png"
function Card(){

    return(
        <>
        <CardContainer>
            <ImagemContainer src={ContainerImagem} alt="procurar" />
            {/* <ImagemContainer2 src={FotoFosca} alt="parte fosca"/> */}
            <DescContainer>Titutlo da postagem</DescContainer>
            <SetaImg src={ImgSeta} alt="Ir para discussão"/>
        </CardContainer>
     </>
    )
}
export default Card