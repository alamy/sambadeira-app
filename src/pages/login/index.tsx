import './style.css'

const Login = () => {
    return(
        <div className='grid login'>
            <label htmlFor="usuario" className='label-login'>Usuario</label>
            <input type="text" id="usuario" className='input-login' />

            <label htmlFor="senha" className='label-login'>Senha</label>
            <input type="password" id="senha" className='input-login' />

            <button className='btn-login'>Login</button>
        </div>
    )
}

export default Login