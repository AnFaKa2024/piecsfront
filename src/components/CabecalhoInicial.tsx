import Link from "next/link"
import Login from "./Login"

export default function CabecalhoInicial(){

  return(

    <header className="bg-light-gray p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-deep-green text-2xl font-bold">PIECS</h1>
        <nav>
          <Link href="/" className="text-medium-gray px-4">Fontes de Energia</Link>
          <Link href="/" className="text-medium-gray px-4">Quem Somos</Link>
          <Link href="/" className="text-medium-gray px-4">Regiões com Microregiões</Link>
          <Link href="/" className="text-medium-gray px-4">Planos de Assinaturas</Link>
          
        </nav>
        <Login/>
      </div>
    </header>

  )
}