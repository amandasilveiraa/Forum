import { BrowserRouter, Route, Routes } from "react-router-dom"
import TelaPostagem from "../Tela Postagem/TelaPostagem"
import Cadastro from "../Cadastro/Cadastro"
import Post from "../Post/Post"
import Login from "../Login/Login"
// import Chat from "../Chat/Chat"
function Rotas(props){

    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route index element={<Login />} />
            <Route path = "cadastro" element = {<Cadastro />}/> 
                    <Route path="postagem" element={<TelaPostagem news={props.news} setNews={props.setNews} />}/>
            <Route path = "post" element = {<Post/>}/>
            {/* <Route path = "chat" element = {<Chat/>}/>  */}
        </Routes>
        </BrowserRouter>
        </>

    )
}
export default Rotas