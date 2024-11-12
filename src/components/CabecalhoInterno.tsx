// aqui terá link para acesso aos painéis de emissão e de redução
import Link from "next/link"

export default function CabecalhoInterno(){

  return (
    <header className="bg-light-gray p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-deep-green text-2xl font-bold">PIECS</h1>
        <nav>
          <Link href="/" className="text-medium-gray px-4"></Link>
          <Link href="/" className="text-medium-gray px-4">Mercado de Carbono</Link>
          <Link href="/" className="text-medium-gray px-4">Visor de emissão </Link>
        </nav>
        
      </div>
    </header>
  )
}