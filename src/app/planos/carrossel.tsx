import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function Carrossel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  
  const clientes = [
    {
      texto: `"Reduzi meus custos de energia em 30% com o Plano Solar Básico!"`,
      autor: "- João Silva, Cliente Residencial",
    },
    {
      texto: `"Reduzi meus custos de energia em 55% com o Plano Avançado!"`,
      autor: "- Osvald Clement, Produtor de Hortaliças",
    },
    {
      texto: `"A energia solar foi uma excelente opção para minha casa!"`,
      autor: "- Ana Paula, Cliente Residencial",
    },
    {
      texto: `"Economizei muito em energia e contribuí para o meio ambiente!"`,
      autor: "- Carlos Andrade, Empresário",
    },
  ]

  // próximo texto
  const nextTestimony = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === clientes.length - 1 ? 0 : prevIndex + 1
    )
  }

  // texto anterior
  const prevTestimony = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? clientes.length - 1 : prevIndex - 1
    )
  }

  return (
    <main>
      
      {/* Seção de Texto */}
      <section className="bg-claro p-8 text-center">
        <h2 className="text-3xl font-bold text-padrao mb-6"> O que nossos clientes dizem </h2>
        <div className="flex justify-center items-center space-x-4">
          
          {/* Ícone para ir ao texto anterior */}
          <button onClick={prevTestimony} aria-label="Anterior">
            <FaChevronLeft className="text-2xl text-green-700 hover:text-green-500" />
          </button>

          {/* Card de texto */}
          <div className="bg-white border border-linha shadow-xl p-4 rounded-md max-w-xs">
            <p className="italic">{clientes[currentIndex].texto}</p>
            <p className="font-bold mt-2">{clientes[currentIndex].autor}</p>
          </div>

          {/* Ícone para ir ao próximo texto */}
          <button onClick={nextTestimony} aria-label="Próximo">
            <FaChevronRight className="text-2xl text-green-700 hover:text-green-500" />
          </button>
        </div>
      </section>
    </main>
  )
}
