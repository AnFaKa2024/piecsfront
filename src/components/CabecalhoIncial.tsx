import Link from "next/link"
import Login from "./Login"

export default function Cabecalho(){

  return(

    <header className="bg-light-gray p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-deep-green text-2xl font-bold">PIECS</h1>
        <nav>
          <Link href="/" className="text-medium-gray px-4">Home</Link>
          <Link href="/marketplace" className="text-medium-gray px-4">Marketplace</Link>
          <Link href="/dashboard" className="text-medium-gray px-4">Dashboard</Link>
        </nav>
        <Login/>
      </div>
    </header>

  )
}