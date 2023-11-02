import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/Login/Login"
import Cadastro from "../pages/Cadastro/Cadastro"
import TelaPostagem from "../pages/Tela Postagem/TelaPostagem"
import Post from "../pages/Post/Post"

function Rotas(props){

    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route index element={<Login />} />
            <Route path = "/cadastro" element = {<Cadastro />}/>
            <Route path ="/login" element={<Login />}/>
            <Route path="/postagem" element={<TelaPostagem news={props.news} setNews={props.setNews}/>}/>
            <Route path = "/post" element = {<Post/>}/>
            {/* <Route path = "chat" element = {<Chat/>}/>  */}
        </Routes>
        </BrowserRouter>
        </>

    )
}
export default Rotas