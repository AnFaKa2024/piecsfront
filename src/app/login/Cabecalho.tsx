import Link from "next/link"
import Image from "next/image"
import logo from '../../image/logoSemFundo.png'
import { FiLogIn, FiLogOut} from 'react-icons/fi'

export default function Cabecalho(){
 
  return(
    <header className="text-claro bg-faixa font-bold text-xl p-4 w-full">
    
        <h1 className="text-claro text-5xl text-center font-bold mb-4">Plataforma Integrada de Energia Comunitária e Sustentável</h1>
    
            <Image src={logo} alt="logoSfundo" className="w-44 h-44"></Image>
        <div className="flex flex-col items-center">

          <div className="flex text-center space-x-64">
          {/* esse link precisa ir para a Página externa */}
          <Link href={'/'} className="text-deep-green text-2xl hover:text-yellow-500 font-semibold">PIECS</Link> 
        
          <Link href="/homeInterna" className="flex items-center space-x-2 hover:text-yellow-500 text-2xl font-semibold"> <FiLogIn size={20} />Entrar</Link>
          </div>        
      
        </div>
        {/* Por esse link o usuário tem a opção de sair do PIECS */}
      <Link href="/logout" aria-label="Sair" className="flex flex-col items-center text-claro text-2xl hover:text-indigo-950"><FiLogOut />Sair do PIECS</Link>
    </header>
  )
}