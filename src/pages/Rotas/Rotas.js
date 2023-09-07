import { BrowserRouter, Route, Routes } from "react-router-dom"
import TelaPostagem from "../Tela Postagem/TelaPostagem"
// import Cadastro from "../Cadastro/Cadastro"
import Post from "../Post/Post"
import Login from "../Login/Login"
function Rotas(){

    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route index element={<Login />} />
            {/* <Route path = "cadastro" element = {<Cadastro />}/> FIORI */}
            <Route path = "postagem" element = {<TelaPostagem/>}/>
            <Route path = "post" element = {<Post/>}/>
            {/* <Route path = "chat" element = {</>}/>  PAGINA DO FIORI COM A ROTA*/}
        </Routes>
        </BrowserRouter>
        </>

    )
}
export default Rotas