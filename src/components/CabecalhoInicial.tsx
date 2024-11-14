import Link from "next/link"
import Image from "next/image"
import logo from "../image/logoSemFundo.png"
import perfilEd2 from '../image/perfilEd2.png'

export default function CabecalhoInicial(){

  return(

    <header className="text-claro bg-faixa font-bold text-xl p-4 w-full">
        <h1 className="text-claro text-5xl text-center font-bold mb-4">Plataforma Integrada de Energia Comunitária e Sustentável</h1>
      
      
        

          <div className="flex flex-shrink-0 items-center">
            <Image src={logo} alt="logoSfundo" className="w-44 h-44"/>

          
            <nav className="flex-1 text-center space-x-4">
              <Link href="/" className="text-xl px-4 hover:text-yellow-500">PIECS</Link>
              <Link href="/" className="text-xl px-4 hover:text-yellow-500">Quem Somos</Link>
              <Link href="/" className="text-xl px-4 hover:text-yellow-500">Fontes de Energia</Link>
              <Link href="/" className="text-xl px-4 hover:text-yellow-500">Baterias</Link>
              <Link href="/" className="text-xl px-4 hover:text-yellow-500">Planos de Assinaturas</Link>
            </nav>
          

            <Link href="/login">
              <div className='flex-shrink-0'>
                <Image src={perfilEd2} alt="perfilEditavel" className='w-20 h-20'/>
              </div>
            </Link>
        
          </div>
      
    </header>

  )
}


