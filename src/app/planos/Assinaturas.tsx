
import React, { useState } from 'react'
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline'


export default function Assinaturas() {

  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen)
  }


  return (
    
    <main className="bg-green-50 text-gray-800">
      

      {/* Seção Planos de Locação de Equipamentos */}
      
      {/*ajustar os quadros para ficaram como o dos artigos 
        fazer o carrossel funcionar*/}
        
      <div className="grid grid-cols-3">
        <section id="planos" className="p-8">
            <h2 className="text-3xl font-bold text-green-700 mb-4">Locação de Equipamentos</h2>

            
            {/* Plano Solar Básico */}
            <div className="bg-yellow-100 p-4 rounded-md shadow-md mb-4">
              <h3 className="text-xl font-semibold text-green-600">Plano Solar Básico</h3>
              <ul className="list-disc list-inside">
                <li>Locação de placas fotovoltaicas com manutenção.</li>
                <li>Acesso ao software de monitoramento.</li>
                <li>Destinado para residências e pequenos negócios.</li>
              </ul>
            </div>

            {/* Plano Eólico Básico */}
            <div className="bg-blue-100 p-4 rounded-md shadow-md mb-4">
              <h3 className="text-xl font-semibold text-green-600">Plano Eólico Básico</h3>
              <ul className="list-disc list-inside">
                <li>Inclui uma turbina eólica com suporte técnico.</li>
                <li>Integração com software de monitoramento.</li>
                <li>Para propriedades rurais com demanda energética média.</li>
              </ul>
            </div>

            
        </section>

        {/* Seção Serviços de Manutenção */}
        <section id="manutencao" className="p-8 bg-green-100">
          <h2 className="text-3xl font-bold text-green-700 mb-4">Serviços de Manutenção</h2>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">Manutenção e Higienização das Placas Solares</h3>
            <p className="text-gray-600">Limpeza Bimestral - R$ 150,00 por visita</p>
            <p className="text-gray-600">Manutenção Preventiva (Trimestral) - R$ 200,00 por visita</p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">Manutenção das Baterias</h3>
            <p className="text-gray-600">Inspeção e Teste de Desempenho (Trimestral) - R$ 150,00 por visita</p>
            <p className="text-gray-600">Substituição de Componentes (Anual) - R$ 300,00</p>
          </div>
        </section>

        {/* Seção Níveis de Serviço */}
        <section id="niveis" className="p-8">
          <h2 className="text-3xl font-bold text-green-700 mb-4">Níveis de Serviço</h2>

          {/* Nível Básico */}
          <div className="bg-gray-100 p-4 rounded-md shadow-md mb-4">
            <h3 className="text-xl font-semibold text-green-600">Nível Básico</h3>
            <p>Acesso à plataforma com monitoramento básico. Ideal para residências e pequenos negócios.</p>
            <p>Valor Mensal: R$ 100,00 a R$ 200,00 (variação conforme a distância)</p>
          </div>

          {/* Nível Intermediário */}
          <div className="bg-gray-200 p-4 rounded-md shadow-md mb-4">
            <h3 className="text-xl font-semibold text-green-600">Nível Intermediário</h3>
            <p>Monitoramento avançado com relatórios de sustentabilidade. Ideal para empresas de médio porte.</p>
            <p>Valor Mensal: R$ 300,00 a R$ 500,00</p>
          </div>

          {/* Nível Avançado */}
          <div className="bg-gray-300 p-4 rounded-md shadow-md mb-4">
            <h3 className="text-xl font-semibold text-green-600">Nível Avançado</h3>
            <p>Serviços completos, com IA para otimização de uso e relatórios detalhados.</p>
            <p>Valor Mensal: R$ 800,00 a R$ 1200,00</p>
          </div>
        </section>
      </div>

      <div>

        {/* Seção de Testemunhos */}
        <section className="bg-gray-100 p-8 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-6">O que nossos clientes dizem</h2>
          <div className="flex justify-center space-x-4">
            {/* Card de Testemunho */}
            <div className="bg-white p-4 rounded-md shadow-md max-w-xs">
              <p className="italic">"Reduzi meus custos de energia em 30% com o Plano Solar Básico!"</p>
              <p className="font-bold mt-2">- João Silva, Cliente Residencial</p>
            </div>

            <div className="bg-white p-4 rounded-md shadow-md max-w-xs">
              <p className="italic">"Reduzi meus custos de energia em 55% com o Plano xxxxxxxxxxx!"</p>
              <p className="font-bold mt-2">- Osvald Clement, Produtor de Hortaliceas</p>
            </div>

            <div className="bg-white p-4 rounded-md shadow-md max-w-xs">
              <p className="italic">"xxxxxxxxxx"</p>
              <p className="font-bold mt-2">- xxxxxxxxxxxxx </p>
            </div>

            <div className="bg-white p-4 rounded-md shadow-md max-w-xs">
              <p className="italic">"xxxxxxxxx"</p>
              <p className="font-bold mt-2">- xxxxxxxxxxxxx </p>
            </div>
            
          </div>
        </section>

        {/* Formulário de Contato */}
        <section id="contato" className="p-8 bg-green-200">
          <h2 className="text-3xl font-bold text-green-700 mb-4">Entre em Contato</h2>
          <form className="bg-white p-6 rounded-md shadow-md max-w-md mx-auto">
            <label className="block mb-4">
              <span className="text-gray-700">Nome</span>
              <input type="text" className="mt-1 block w-full border-gray-300 rounded-md" placeholder="Seu nome" />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Email</span>
              <input type="email" className="mt-1 block w-full border-gray-300 rounded-md" placeholder="seuemail@example.com" />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Mensagem</span>
              <textarea className="mt-1 block w-full border-gray-300 rounded-md" rows="3" placeholder="Como podemos ajudar?" />
            </label>
            <button type="submit" className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300">
              Enviar Mensagem
            </button>
          </form>
        </section>
        
      </div>

      <div>
        {/* Modal do Chatbot */}
        {isChatOpen && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full relative">
              <button onClick={toggleChat} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
                ✕
              </button>
              
              <h3 className="text-xl font-bold text-green-700 mb-4">Chatbot de Suporte</h3>
              <p className="text-gray-700 mb-4">Como posso ajudar você?</p>
              {/* Caixa de texto de entrada de mensagem */}
              <input type="text" className="w-full border border-gray-300 rounded-md p-2 mb-4" placeholder="Digite sua mensagem..."/>
              <button className="bg-green-700 text-white px-4 py-2 rounded-md w-full hover:bg-green-600 transition duration-300">
                Enviar </button>
            </div>
          </div>
        )}
     
      </div>
    </main>
  )
}
