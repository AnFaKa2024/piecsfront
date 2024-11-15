import Link from "next/link"
import Image from "next/image"
import logo from "../image/logoSemFundo.png"
import perfilEd2 from '../image/perfilEd2.png'
import { FiLogOut } from 'react-icons/fi'

export default function CabecalhoInicial(){

  return(

    <header className="text-claro bg-faixa font-bold text-xl p-4 w-full">
        <h1 className="text-claro text-4xl text-center font-bold mb-4">Plataforma Integrada de Energia Comunitária e Sustentável</h1>
      

          <div className="flex items-center justify-between space-x-6">
            <Image src={logo} alt="logoSfundo" className="w-40 h-40 -mt-6"/>

          
            <nav className=" text-center space-x-4">
              <Link href="/" className="text-xl px-4 hover:text-yellow-500">PIECS</Link>
              <Link href="/somos" className="text-xl px-4 hover:text-yellow-500">Quem Somos</Link>
              <Link href="/fontes" className="text-xl px-4 hover:text-yellow-500">Fontes de Energia</Link>
              <Link href="/bateria" className="text-xl px-4 hover:text-yellow-500">Baterias</Link>
              <Link href="/planos" className="text-xl px-4 hover:text-yellow-500">Planos de Assinaturas</Link>
            </nav>
          

            <Link href="/login">
              <div className="">
                <Image src={perfilEd2} alt="perfilEditavel" className='w-20 h-20'/>
              </div>
            </Link>
        
            <Link href="/" aria-label="Sair" className="flex flex-col items-end text-claro text-xl hover:text-indigo-950"><FiLogOut />Sair do PIECS</Link>
          </div>
      {/* Por esse link o usuário tem a opção de sair do PIECS */}
    </header>

  )
}


