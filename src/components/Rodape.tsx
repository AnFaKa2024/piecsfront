import Link from "next/link"
import { FiLogOut } from 'react-icons/fi'

export default function Rodape(){

  return(

    <footer className="bg-faixa p-4">
      <div className="max-w-7xl mx-auto text-center text-claro">
        <div className="flex flex-col items-center space-y-2 mt-2">
          <p><strong>Muitas são as aflições dos justos, mas o Senhor de todas o livra. Sl 34.19</strong></p>
            <div className="flex space-x-4">
              <a href="#" className="text-claro">Facebook</a>
              <a href="#" className="text-claro">Twitter</a>
              <a href="#" className="text-claro">LinkedIn</a>
            </div>
        <p>&copy; {new Date().getFullYear()} PIECS. Todos os direitos reservados.</p>
        </div>
        <Link href="/" aria-label="Sair" className="flex flex-col items-end text-claro text-xl hover:text-indigo-950"><FiLogOut />Sair do PIECS</Link>
      </div>
    </footer>

  )
}

