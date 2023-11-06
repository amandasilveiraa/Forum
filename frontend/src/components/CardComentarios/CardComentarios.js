import {DivComentario, DivImgPerfilComentario, DivComentario2, NomeUsuarioComentario, ComentarioUsuario, ImgPerfil, BotaoCurtida } from "./CardComentarios.jsx";
import imgperfil1 from '../../assets/Ellipse 2.png'
import like from '../../assets/like.png'

function CardComentarios (){

    return(
        <>
            <DivComentario>
                <DivImgPerfilComentario><ImgPerfil src={imgperfil1}/></DivImgPerfilComentario>
                <DivComentario2>
                    <NomeUsuarioComentario>Ronaldo Souza</NomeUsuarioComentario>
                    <ComentarioUsuario>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</ComentarioUsuario>
                    <BotaoCurtida src={like}/>
                </DivComentario2>
            </DivComentario>        
        </>
    )

}

export default CardComentarios