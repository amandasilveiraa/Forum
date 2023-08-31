import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "../pages/Cadastro/Cadastro";
import Login from "../pages/Login/Login";

function Routes (){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element = {<Login/>} />
                <Route path="cadastro" element = {<Cadastro/>} />
                <Route path="*" element = {<Home/>} />
            </Routes>
        </BrowserRouter>
    )
};

export default Routes;