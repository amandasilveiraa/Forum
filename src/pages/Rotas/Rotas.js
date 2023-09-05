import { BrowserRouter, Route, Routes } from "react-router-dom"
import TelaPostagem from "../Tela Postagem/TelaPostagem"
import Post from "../Post/Post"
function Rotas(){

    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route index element={<TelaPostagem/>}/>
            <Route path = "post" element = {<Post/>}/>
            {/* <Route path = "chat" element = {</>}/>  PAGINA DO FIORI COM A ROTA*/}
        </Routes>
        </BrowserRouter>
        </>

    )
}
export default Rotas