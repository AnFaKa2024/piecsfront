import Link from "next/link"
import Image from "next/image"
import logo from '../../image/logoSemFundo.png'
import { FiLogIn} from 'react-icons/fi'

export default function Cabecalho(){
 
  const IconeEntrar = () => <FiLogIn size={20} />
 
  return(
    <header>
    <div className="flex items-center justify-between max-w-screen-xl mx-auto p-4">
        <Image src={logo} alt="logoSfundo" className="w-20 h-20"></Image>
        <h1 className="text-deep-green text-2xl font-bold text-center">Plataforma Integrada de Energia Comunitária e Sustentável</h1>
        <Link href="/login" className="flex items-center space-x-2 text-deep-green font-semibold"> <FiLogIn size={20} />Entrar</Link>
        
        {/* esse link precisa ir para a Página externa */}
        <Link href={'/'} className="text-deep-green text-deep-green font-semibold">Home</Link> 
      </div>
    </header>
  )
}