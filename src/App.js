// import Postagem from "./pages/Tela Postagem/TelaPostagem";
// import Post from "./pages/Post/Post";
import StyledGlobal from "./styledGlobal";

import Rotas from "./pages/Rotas/Rotas";
import { useState } from "react";

function App() {
  const [news, setNews] = useState([])
  return(
  <>
    <StyledGlobal/>
    {/* <Postagem/> */}
    {/* <Post/> */}
      <Rotas news={news} setNews={setNews} />
  </>
  )
}

export default App;
