import Header2 from "../../components/Header2/Header2";
import CardPerfil from "../../components/CardPerfil/CardPerfil";
import CardChat from "../../components/CardChat/CardChat";
import CardComentarios from "../../components/CardComentarios/CardComentarios";
import {TituloComments, DivComments} from "../../pages/Chat/Chat.jsx"
import LabelComment from "../../components/LabelComments/LabelComments";

function Chat (){
    return(
        <>
        <Header2/>
        <CardPerfil/>
        <CardChat />
        <TituloComments>Comments</TituloComments>
        <DivComments>
            <CardComentarios/>           
            <CardComentarios/>
            <LabelComment/>
        </DivComments>
        </>
    )

}

export default Chat