import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/login"
import Home from "./pages/home"
import AdmPage from "./pages/AdmPage/indes"

const Rotas = () => {


    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/sambadeira-app" element={<Login />} />
        <Route path="/adm" element={<AdmPage />} />
        
      </Routes>
      </BrowserRouter>
    )
}

export default Rotas