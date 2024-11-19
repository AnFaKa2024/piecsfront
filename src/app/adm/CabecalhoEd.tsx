import Link from "next/link"
import Image from "next/image"
import logo from '../../image/logoSemFundo.png'
import { FiLogIn, FiLogOut} from 'react-icons/fi'

export default function CabecalhoEd(){
 
  return(
    <header className="text-claro bg-faixa font-bold -mt-2 text-xl p-4 w-full">
    
        <h1 className="text-claro text-4xl text-center font-bold">Plataforma Integrada de Energia Comunitária e Sustentável</h1>
    
            <Image src={logo} alt="logoSfundo" className="w-40 h-40 -mt-6"></Image>
        <div className="flex flex-col items-center">

          <nav className="flex-1 text-center space-x-4 -mt-20">
          {/* esse link precisa ir para a Página externa */}
            <Link href={'/'} className="text-xl hover:text-yellow-500 font-semibold">PIECS</Link> 
            <Link href='/homeInterna' className="hover:text-yellow-500 text-xl px-4">Home</Link>
          
          </nav>        
      
        </div>
        {/* Por esse link o usuário tem a opção de sair do PIECS */}
      <Link href="/logout" aria-label="Sair" className="flex flex-col -mt-20 items-end text-claro text-xl hover:text-indigo-950"><FiLogOut />Sair do PIECS</Link>
    </header>
  )
}