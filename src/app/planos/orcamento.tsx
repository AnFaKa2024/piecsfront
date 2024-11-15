import { OrcProps } from '@/types'
import { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'

export default function Orcamento({ onSubmit, chatbotOpen }: OrcProps) {
  const [isChatOpen, setIsChatOpen] = useState(chatbotOpen || false)

  const handleSubmit = (e)=> {e.preventDefault()
    if (onSubmit) {onSubmit()}}

  return (
    <main>

      {/* Formulário de Contato */}
      <section id="contato" className="p-8 bg-primaria">
        <h2 className="text-3xl text-center font-bold text-padrao mb-4">Entre em Contato, peça um Orçamento!!</h2>
        <form onSubmit={handleSubmit} className="bg-white border border-linha p-6 rounded-md shadow-md max-w-md mx-auto">
          
          <label className="block mb-4">
            <span className="text-gray-700">Nome</span>
            <input type="text" className="mt-1 block w-full border border-linha rounded-md" placeholder="Seu nome" required/>
          </label>
          
          <label className="block mb-4">
            <span className="text-gray-700">Email</span>
            <input type="email" className="mt-1 block w-full border border-linha rounded-md" placeholder="seuemail@example.com" required/>
          </label>
          
          <label className="block mb-4">
            <span className="text-gray-700">Mensagem</span>
            <textarea className="mt-1 block w-full border border-linha rounded-md" placeholder="Como podemos ajudar?" required/>
          </label>
          
          <button type="submit" className="bg-green-900 text-white flex items-center justify-center gap-2 px-6 py-2 rounded-md hover:bg-green-600 transition duration-300">
            Enviar Mensagem <FaPaperPlane className="text-xl" />
          </button>
       
        </form>
      </section>

      {/* Modal do Chatbot */}
      {isChatOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full relative">
            <button onClick={() => setIsChatOpen(false)} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">✕ </button>

            <h3 className="text-xl font-bold text-green-700 mb-4">Chatbot de Suporte</h3>
            <p className="text-gray-700 mb-4">Como posso ajudar você?</p>
            {/* Caixa de texto de entrada de mensagem */}
            <input type="text" className="w-full border border-gray-300 rounded-md p-2 mb-4" placeholder="Digite sua mensagem..." />
            <button className="bg-green-700 text-white px-4 py-2 rounded-md w-full hover:bg-green-600 transition duration-300"> Enviar </button>
          </div>
        </div>
      )}
    </main>
  )
}
