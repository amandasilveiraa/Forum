import { DivComentario, DivImgPerfilComentario, ImgPerfil} from "../CardComentarios/CardComentarios.jsx"
import imgperfil1 from '../../assets/Ellipse 2.png'
import { CustomInput, CustomInputSubmit } from "./LabelComments.jsx"

function LabelComment (){
    return(
        <>
            <DivComentario>

                <DivImgPerfilComentario><ImgPerfil src={imgperfil1}/></DivImgPerfilComentario>
                <CustomInput type="text" id="email" placeholder="What are you thinking about?"/>
                <CustomInputSubmit value="Create account" type="submit"/>
                </DivComentario>
        </>
    )

}

export default LabelComment