import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/login"
import Home from "./pages/home"

const Rotas = () => {


    return (
        <BrowserRouter>
        <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/sambadeira-app" element={<Login />} />
        
      </Routes>
      </BrowserRouter>
    )
}

export default Rotas