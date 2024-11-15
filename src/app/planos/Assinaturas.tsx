
import React from 'react'
import Image from 'next/image'
import manut from '../../image/manut.jpg'
import manut2 from '../../image/manut2.jpg'
import manuteolica from '../../image/manuteolica.jpg'
import manuteolica2 from '../../image/manuteolica2.jpg'
import manuteolica3 from '../../image/manuteolica3.jpg'
import manutBat from "../../image/manutBat.jpg"




export default function Assinaturas() {

  return (
    
    <main className="bg-primaria text-gray-800 min-h-screen px-4">
      
      <h1 className='text-center text-3xl md:text-5xl text-linha py-8'>Conheça Nossos Planos de Locações</h1>

      <p className="text-center text-2xl text-linha mb-8">Os planos de locação são diversificados e fica totalmente a critério do cliente, podendo ser locação apenas das placas fotovoltaicas ou turbinas eólicas, como apenas das baterias.</p>
     
        
      <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl text-center font-semibold text-padrao mb-6">Locação de Equipamentos</h2>
        
        <section className=" p-4 grid grid-cols-2 m-4 gap-6">
            
            {/* Plano Solar Básico */}
            <div className=" bg-white p-4 rounded-md shadow-md border border-linha mb-4">
              <h3 className="text-xl font-semibold mb-3 ">Plano Solar Básico</h3>
              <ul className="list-disc list-inside  space-y-2">
                <li>Inclui locação de 5 placas fotovoltaicas e 1 bateria de 5kWh ambos recebem manutenção.</li>
                <li>Acesso ao software de monitoramento para acompanhamento do consumo.</li>
                <li>Destinado para residências e pequenos negócios.</li>
                <li>Manutenção mensal = R$15,00/ placa.</li>
              </ul>
            </div>

            {/* Plano Eólico Básico */}
            <div className=" bg-white p-4 rounded-md shadow-md border border-linha mb-4">
              <h3 className="text-xl font-semibold">Plano Eólico Básico</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>o	Inclui uma turbina eólica com suporte técnico e manutenção.</li>
                <li>Integração com software de monitoramento para acompanhamento do consumo.</li>
                <li>Para propriedades rurais com demanda energética média.</li>
              </ul>
            </div>           
        </section>

        {/* Planos de locação das Baterias */}
        <h3 className="text-2xl text-center font-semibold text-padrao p-6">Planos para Locação de Baterias</h3>
        <section className="bg-white border border-linha rounded-lg shadow-lg m-4 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
            
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">1. Bateria de 5 kWh (residencial e pequenos negócios)</h4>
              <ul className="list-disc list-inside">
                <li>Locação mensal: R$ 250,00</li>
                <li>Locação anual (com desconto de 10%): R$ 2.700,00</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-lg font-semibold">2. Bateria de 10 kWh (médio porte)</h4>
              <ul className="list-disc list-inside">
                <li>Locação mensal: R$ 400,00</li>
                <li>Locação anual (com desconto de 10%): R$ 4.320,00</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-lg font-semibold">3. Bateria de 20 kWh (comercial)</h4>
              <ul className="list-disc list-inside">
                <li>Locação mensal: R$ 700,00</li>
                <li>Locação anual (com desconto de 15%): R$ 7.140,00</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-lg font-semibold">4. Bateria de 50 kWh (industrial e propriedades rurais)</h4>
              <ul className="list-disc list-inside">
                <li>Locação mensal: R$ 1.200,00</li>
                <li>Locação anual (com desconto de 20%): R$ 11.520,00</li>
              </ul>
            </div>

          </div>
        <p className="text-center text-xl text-red-600 mt-8">Lembrando que esses valores são por unidade de bateria!</p>
        </section>
    
        <section className='p-6'>

          <h2 className="text-2xl font-bold text-center mb-6">Pacotes Combinados</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white border border-linha rounded-lg shadow-lg p-4">
              <h3 className="text-xl font-semibold text-center mb-4" >Combo Residencial</h3>
              <ul className="space-y-2">
                <li>Conjunto de 10 placas fotovoltaicas e 1 bateria de 5kWh de armazenamento.</li>
                <li>Acesso completo ao software de monitoramento e relatórios mensais.</li>
                <li>Ideal para consumidores residenciais que buscam autonomia energética.</li>
                <li>Valor Mensal de Locação: R$ 1.200,00.</li>
                <li>Valor Anual de Locação (com desconto de 10%): R$ 12.960,00.</li>
              </ul>
            </div>

            <div className="bg-white border border-linha rounded-lg shadow-lg p-4">
              <h3 className="text-xl font-semibold text-center mb-4">Combo Comercial</h3>
              <ul className="space-y-2">
                <li>Turbinas eólicas, 20 placas solares e 1 bateria de 20kWh.</li>
                <li>Monitoramento com relatórios semanais e chatbot para suporte.</li>
                <li>Para pequenos e médios comércios que buscam redução de custos operacionais.</li>
                <li>Valor Mensal de Locação: R$ 3.500,00.</li>
                <li>Valor Anual de Locação (com desconto de 15%): R$ 35.700,00.</li>
              </ul>
            </div>

            <div className="bg-white border border-linha rounded-lg shadow-lg p-4">
              <h3 className="text-xl font-semibold text-center mb-4">Combo Completo</h3>
              <ul className="space-y-2">
                <li>Composto por 1 turbina eólica, 50 placas solares e 2 baterias de alta capacidade.</li>
                <li>Integração com Sistema de Monitoramento e IA: Projeções de consumo, otimização e relatórios personalizados.</li>
                <li>Manutenção Completa: Manutenções trimestrais e revisões anuais de todos os equipamentos.</li>
                <li>Valor Mensal de Locação: R$ 12.000,00.</li>
                <li>Valor Anual de Locação (com desconto de 20%): R$ 115.200,00.</li>
              </ul>
            </div>
          </div>
        </section>



        {/* Seção Serviços de Manutenção */}
        <section id="manutencao" className="p-8 ">
          <h2 className="text-3xl text-center font-semibold text-padrao p-6">Realizamos Manutenções dos Equipamentos</h2>
        
          <div className='grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6'>
            <Image src={manut} alt='manut' className="hover:w-full border-4 border-linha"></Image>
            <Image src={manuteolica} alt='manuteolica' className="hover:w-full border-4 border-linha"></Image>
            <Image src={manutBat} alt='ManutBat' className="hover:w-full border-4 border-linha"></Image>
            <Image src={manut2} alt='manut2' className="hover:w-full border-4 border-linha"></Image>
            <Image src={manuteolica2} alt='manuteolica2' className="hover:w-full border-4 border-linha"></Image>
            <Image src={manuteolica3} alt='manuteolica3' className="hover:w-full border-4 border-linha"></Image>
          </div>
            <h3 className='text-5xl text-center gap-8 hover:text-red-600'>Faça um orçamento, consulte nossos valores e pacotes de serviços! </h3>
        </section>

        
      </div>
    </main>
  )
}
