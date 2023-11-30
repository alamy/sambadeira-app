import './style.css'
import  Date  from '../../date.json'
import { useState } from 'react'
import Home from "../../pages/home"
import Logo  from '../../assets/img/Logo.jpeg'
import { redirect } from "react-router-dom";

export const Usu = {

    nome: 'teste'
}

const Login = () => {

    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const [logado, setLogado] = useState(true)

function Loging(dateUser: any, unserAcount: any, senha:any, nasc:any){

     if(dateUser === unserAcount && unserAcount !== '' && senha === nasc){
          setLogado(true)
     }
     else {
         setLogado(false)
     }
}

    const logar = () => {
     
        console.log('aqui   ')
        if(login === 'adm' && senha === 'adm'){
            console.log(senha)
            console.log('------')
            console.log(login)
            console.log('aq')
            redirect("/adm");

        }else {
            Date.filter(date => Loging(date.CPF, login, senha, date['Data de Nascimento']))
        }
        
        //navigate('/home')
    }



    return(
        <>
        <div className='login'>
            <img src={Logo} alt='sambadeira' className='img-login' />
        {logado ? 
        <>
        <div className='mt-10'>
            <h2>Login</h2>

            <label htmlFor="usuario" className='label-login'>Usuario</label>
            <input type="text" id="usuario" value={login} className='input-login' onChange={(e) => setLogin(e.target.value)} />

            <label htmlFor="senha" className='label-login'>Senha</label>
            <input type="password" value={senha} id="senha" className='input-login' onChange={(e) => setSenha(e.target.value)}/>

            <button className='btn-login' onClick={logar}>Entra</button>
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



