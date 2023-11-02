import StyledGlobal from "./styledGlobal";

import Rotas from "./Rotas/Rotas";
import { useState } from "react";

function App() {
  const [news, setNews] = useState([])
  return(
  <>
    <StyledGlobal/>
    <Rotas news={news} setNews={setNews} />
  </>
  )
}

export default App;
