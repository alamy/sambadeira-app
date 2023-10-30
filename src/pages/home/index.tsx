import { useState } from 'react'
import Date from '../../date.json'
import './estilo.css'
import PerfilComponent from '../../componet/PerfilComponent'

export interface UsuarioSamba {
    nome: String
    Data: String
}

const Home = (cpf: any) => {
    const use = Date.find((element => element.CPF === cpf.cpf))

    const [ensaio, setEnsaio] = useState(Boolean)
    const [presenca, setPrecenca] = useState(Boolean)
    const [fin, setFin] = useState(Boolean)


    function EnsaioBtn() {
        setEnsaio(true)
        setPrecenca(false)
        setFin(false)
    }

    function PresencaBtn() {
        setEnsaio(false)
        setPrecenca(true)
        setFin(false)
    }

    function FinBtn() {
        setEnsaio(false)
        setPrecenca(false)
        setFin(true)
    }

    return (
        <>
           <PerfilComponent use={use} />


            <ul className="list-none hover:list-disc list-inside block text-white  border-white border mt-9 mb-8 p-4 ">
                <li onClick={EnsaioBtn} className='inline-block'><button> Ensaios </button></li>
                <li onClick={PresencaBtn} className='inline-block ml-5'>Presença</li>
                <li onClick={FinBtn} className='inline-block ml-5'>Financeiro</li>
            </ul>



            {ensaio ?

                <div className='bg-slate-50 pl-2 pr-2 text-left'>
                    <table className="table-auto border-spacing-x-3">
                        <tr>
                            <th>Dia</th>
                            <th>Horário</th>
                            <th>Local</th>
                        </tr>
                        <tr>
                            <td>07/10 - Sabado</td>
                            <td>09:00h</td>
                            <td>Olinda</td>
                        </tr>
                        <tr>
                            <td>07/10 - Sabado</td>
                            <td>09:00h</td>
                            <td>Olinda</td>
                        </tr>
                    </table>
                </div>

                : null}

            {presenca ?
                <div className='bg-slate-50 pl-2 pr-2 text-left'>
                    <table className="table-auto border-spacing-x-3">
                        <tr>
                            <th>Dia</th>
                            <th>Presença</th>
                        </tr>
                        <tr>
                            <td>07/10 - Sabado</td>
                            <td>  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6L9 17L4 12" stroke="#52C51D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></td>
                        </tr>
                        <tr>
                            <td>07/10 - Sabado</td>
                            <td>  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6L9 17L4 12" stroke="#52C51D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></td>
                        </tr>
                    </table>
                </div>
                : null}

            {fin ?

                <div className='bg-slate-50 pl-2 pr-2 text-left'>
                    <table className="table-auto border-spacing-x-3">
                        <tr>
                            <th>Mês</th>
                            <th>Valor</th>
                            <th>Pago</th>
                        </tr>
                        <tr>
                            <td>Agosto</td>
                            <td>R$ 100,00</td>
                            <td>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6L9 17L4 12" stroke="#52C51D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <td>Outubro</td>
                            <td>R$ 100,00</td>
                            <td>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#cecece" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 16H12.01" stroke="#cecece" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 8V12" stroke="#cecece" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                            </td>
                        </tr>
                    </table>
                </div>
                : null}


        </>
    )

}

export default Home