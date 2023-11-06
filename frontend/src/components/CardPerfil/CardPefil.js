import { Perfil, TituloImgPerfil,  ImgPerfill} from "./CardPerfil.jsx";
import imgperfil from '../../assets/imgperfil.png'

function CardPerfil (){

    return(
        <>
        <Perfil>
            {/* colocar a seta aqui*/}
            <ImgPerfill src={imgperfil}/> 
            <TituloImgPerfil>Fulano Ciclano</TituloImgPerfil>
        </Perfil> 
        
        </>
    )
}

export default CardPerfil