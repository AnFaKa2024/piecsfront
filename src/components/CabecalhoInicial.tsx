import Link from "next/link"
import Image from "next/image"
import logo from "../image/logoSemFundo.png"

export default function CabecalhoInicial(){

  return(

    <header className="bg-light-gray p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-deep-green text-2xl font-bold">PIECS</h1>
        <Image src={logo} alt="logoSfundo"></Image>
        <nav>

          <Link href="/" className="text-medium-gray px-4">Fontes de Energia</Link>
          <Link href="/" className="text-medium-gray px-4">Quem Somos</Link>
          <Link href="/" className="text-medium-gray px-4">Regiões com Microregiões</Link>
          <Link href="/" className="text-medium-gray px-4">Planos de Assinaturas</Link>
          
        </nav>
        
      </div>
    </header>

  )
}


// {/* Cabeçalho */}
// <header className="bg-green-700 text-white p-4 flex justify-between items-center">
// <h1 className="text-2xl font-bold">Energia Renovável</h1>
// <nav>
//   <a href="#planos" className="px-3">Planos</a>
//   <a href="#manutencao" className="px-3">Manutenção</a>
//   <a href="#niveis" className="px-3">Níveis de Serviço</a>
// </nav>
// </header>