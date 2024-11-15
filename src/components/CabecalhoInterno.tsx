// aqui terá link para acesso aos painéis de emissão e de redução
import Link from "next/link"
import { FiLogOut } from 'react-icons/fi'
import Image from "next/image"
import logo from '../image/logoSemFundo.png'

export default function CabecalhoInterno(){

  return (
    <header className="text-claro bg-faixa font-bold text-xl p-4 w-full">
        <h1 className="text-claro text-5xl text-center font-bold mb-4">Plataforma Integrada de Energia Comunitária e Sustentável</h1>
      <div className="flex flex-shrink-0 items-center">
        <Image src={logo} alt='logoSfundo' className="w-44 h-44 -mt-10"></Image>
       
        <nav className="flex-1 text-center space-x-4">
          {/* Aqui o Home - é para voltar de volta para a página INTERNA */}
          <Link href="/" className="hover:text-yellow-500 text-2xl px-4">PIECS</Link>
          
        </nav>
        
        {/* Por esse link o usuário tem a opção de sair do PIECS */}
        <Link href="/logout" aria-label="Sair" className="flex flex-col items-center text-claro text-2xl hover:text-indigo-950"><FiLogOut />Sair do PIECS</Link>
      </div>
    </header>
  )
}