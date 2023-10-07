import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio/Inicio"
import Cadastro from "./pages/Cadastro/Cadastro"
import Produtos from "./pages/ListaProduto/Produtos"
import NaoEncontrado from "./pages/NaoEncontrado/NaoEncontrado"
import Main from "./components/Main/Main"
function App() {

  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>}>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/Cadastro" element={<Cadastro/>}> </Route>
          <Route path="/Produtos" element={<Produtos/>}> </Route>
        </Route>
        
        <Route path="*" element={<NaoEncontrado/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
