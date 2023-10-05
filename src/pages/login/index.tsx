import './style.css'
import  Date  from '../../date.json'
import { useState } from 'react'
import Home from "../../pages/home"

export const Usu = {

    nome: 'teste'
}

const Login = () => {

    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const [logado, setLogado] = useState(true)

function Loging(dateUser: any, unserAcount: any, senha:any, nasc:any){

    // if(dateUser === unserAcount && unserAcount !== '' && senha === nasc){
    //      setLogado(true)
    // }
    // else {
         setLogado(false)
    // }
}

    const logar = () => {
        Date.filter(date => Loging(date.CPF, login, senha, date['Data de Nascimento']))
        //navigate('/home')
    }



    return(
        <>
        <div className='login'>
        {logado ? 
        <>
        <div className='mt-10'>
            <h2>Sambadeiras PE</h2>

            <label htmlFor="usuario" className='label-login'>Usuario</label>
            <input type="text" id="usuario" value={login} className='input-login' onChange={(e) => setLogin(e.target.value)} />

            <label htmlFor="senha" className='label-login'>Senha</label>
            <input type="password" value={senha} id="senha" className='input-login' onChange={(e) => setSenha(e.target.value)}/>

            <button className='btn-login' onClick={logar}>Login</button>
            </div>
            </>
 : 
        
       <Home cpf={login} />
  
    }
         </div>
        </>
    )
}

export default Login; 



