import { OrcProps } from '@/types'
import React, { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import Image from 'next/image'
import vetraHex from '../../image/vetraHex.png'

export default function Orcamento({ chatbotOpen }: OrcProps) {
  const [isChatOpen, setIsChatOpen] = useState(chatbotOpen)

  const [chatMessage, setChatMessage] = useState("")

  const [chatConversa, setChatConversa] = useState<{sender:'user' | 'bot'; text:string}[]>([])

  const [formData, setFormData] = useState({nome: '',email: '',mensagem: '',})
  
  const handleChatSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()

    if (chatMessage.trim()){
      // atualza o historico das mensagens
      setChatConversa((prev)=>[...prev, {sender:"user", text: chatMessage}])
      try{
        const response = await fetch("/api/telegram", {
        method:"POST",
        headers:{"Content-Type": "application/json",},
        body: JSON.stringify({message: chatMessage})
      })

        const data = await response.json()
          if (data.reply){
            setChatConversa((prev)=> [...prev, {sender: "bot", text: data.reply}])
          }

      }catch(error){
        console.error('Erro ao enviar mensagem:', error)
      }
      
      setChatMessage('') 
      
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({...prev, [name]: value, }))
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Formulário enviado:', formData)
    setFormData({ nome: '', email: '', mensagem: '' })
  }


  return (
    <main>

      {/* Formulário de Contato */}
      <section id="contato" className="p-8 bg-primaria">
        <h2 className="text-3xl text-center font-bold text-padrao mb-4">Entre em Contato, peça um Orçamento!!</h2>
        
        <form onSubmit={handleFormSubmit} className="bg-white border border-linha p-6 rounded-md shadow-md max-w-md mx-auto">
          
          <label className="block mb-4">
            <span className="text-gray-700">Nome</span>
            <input type="text" className="mt-1 block w-full border border-linha rounded-md" placeholder="Seu nome" value= {formData.nome} onChange={handleInputChange} required/>
          </label>
          
          <label className="block mb-4">
            <span className="text-gray-700">Email</span>
            <input type="email" value={formData.email} onChange={handleInputChange} className="mt-1 block w-full border border-linha rounded-md" placeholder="seuemail@example.com" required/>
          </label>
          
          <label className="block mb-4">
            <span className="text-gray-700">Mensagem</span>
            <textarea value={formData.mensagem} onChange={handleInputChange} className="mt-1 block w-full border border-linha rounded-md" placeholder="Como podemos ajudar?" required/>
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

            <div className="flex justify-center mb-4">
              
              <Image src={vetraHex} alt="Assistente Virtual Vetra" className="rounded-full" />
            </div>

            
            <h3 className="text-gray-700 mb-4">Olá, sou Vetra, como posso te ajudar?</h3>

            <div className="mb-4 h-48 overflow-y-auto border p-2">
              {chatConversa.map((msg, index) => (
                <p key={index} className={`text-sm ${ msg.sender === 'user' ? 'text-right text-blue-700' : 'text-left text-gray-700' }`}>
                  <strong>{msg.sender === 'user' ? 'Você:' : 'Vetra:'}</strong>{' '} {msg.text}
                </p>
              ))}
           
            </div>
            <form onSubmit={handleChatSubmit} className="flex gap-2">
              <input type="text" value={chatMessage} onChange={(e) => setChatMessage(e.target.value)} className="flex-grow border border-gray-300 rounded-md p-2" placeholder="Digite sua mensagem..."/>
              <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300" >
                Enviar
              </button>
            </form>

          </div>
        </div>
      )}
    </main>
  )
}
