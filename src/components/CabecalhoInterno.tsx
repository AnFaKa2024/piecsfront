// aqui terá link para acesso aos painéis de emissão e de redução
import Link from "next/link"
import { FiLogOut } from 'react-icons/fi'
import Image from "next/image"
import logo from '../image/logoSemFundo.png'
import perfil from '../image/perfilEd2.png'

export default function CabecalhoInterno(){

  return (
    <header className="text-claro bg-faixa font-bold text-xl p-4 w-full">
        <h1 className="text-claro text-4xl text-center font-bold mb-4">Plataforma Integrada de Energia Comunitária e Sustentável</h1>
      
      <div className="flex items-center justify-between space-x-6">
        <Image src={logo} alt='logoSfundo' className="w-40 h-40 -mt-6"></Image>
       
        <nav className="flex-1 text-center space-x-4">

          {/* Aqui é para voltar de volta para a página EXTERNA */}
          <Link href="/" className="hover:text-yellow-500 text-xl -mt-20 px-4">PIECS</Link>
          <Link href="/homeInterna" className="hover:text-yellow-500 text-xl -mt-20 px-4">Home</Link>
          
          
        </nav>

        {/* O acesso para o Editar Perfil é RESTRITO apenas para o Responsável 
            Ainda não está com a RESTRIÇÃO*/}
        <Link href='/adm'><Image src={perfil} alt="EditarPerfil" className="w-20 h-20"></Image></Link>
        
        
        {/* ALERT para notificar que se trata de uma área restrita ao responável */}

        
        {/* Por esse link o usuário tem a opção de sair do PIECS */}
        <Link href="/logout" aria-label="Sair" className="flex flex-col items-end text-claro text-xl hover:text-indigo-950"><FiLogOut />Sair do PIECS</Link>
      </div>
    </header>
  )
}