import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/Login/Login"
import Cadastro from "../pages/Cadastro/Cadastro"
import TelaPostagem from "../pages/Tela Postagem/TelaPostagem"
import Post from "../pages/Post/Post"
import CriarPostagem from "../pages/CriarPostagem/CriarPostagem"

function Rotas(props){

    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route index element={<Login />} />
            <Route path = "/cadastro" element = {<Cadastro />}/>
            <Route path ="/login" element={<Login />}/>
            <Route path="/postagem" element={<TelaPostagem/>}/>
            <Route path = "/post" element = {<Post/>}/>
            <Route path='/createPost' element ={<CriarPostagem/>}/>
            {/* <Route path = "chat" element = {<Chat/>}/>  */}
        </Routes>
        </BrowserRouter>
        </>

    )
}
export default Rotas