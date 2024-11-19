
import React from 'react'
import Image from 'next/image'
import manut from '../../image/manut.jpg'
import manut2 from '../../image/manut2.jpg'
import manuteolica from '../../image/manuteolica.jpg'
import manuteolica2 from '../../image/manuteolica2.jpg'
import manuteolica3 from '../../image/manuteolica3.jpg'
import manutBat from "../../image/manutBat.jpg"
import {FaCheckCircle} from "react-icons/fa"
import Link from 'next/link'



export default function Assinaturas() {

  const handleSelection = (plano:string) => {
    console.log("Plano Selecionado:", plano)
  }

  return (
    
    <main className="bg-primaria text-gray-800 min-h-screen px-4">
      
      <h1 className='text-center text-3xl md:text-5xl text-linha py-8'>Conheça Nossos Planos de Locações</h1>

      <p className="text-center text-2xl text-linha mb-8">Os planos de locação são diversificados e fica totalmente a critério do cliente, podendo ser locação apenas das placas fotovoltaicas ou turbinas eólicas, como apenas das baterias.</p>
     
        
      <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl text-center font-semibold text-padrao mb-6">Equipamentos Disponíveis para Locação</h2>
        
        <section className=" p-4 m-4 gap-6">
            
            {/* Plano Solar Básico */}
            <div className=" bg-white p-4 rounded-md shadow-md border border-linha mb-4">
              <h3 className="text-2xl text-center font-semibold mb-3 ">Planos de Locação de Painéis Fotovoltaicos</h3>
              <ul className="list-disc list-inside grid grid-cols-2  space-y-2 mt-10">
                <li>Acesso ao software de monitoramento para acompanhamento do consumo.</li>
                <li>Destinado para residências e pequenos negócios.</li>
                <li>Valor da Instalção altera de acordo com o plano</li>
                <li>Manutenção mensal = R$15,00/ painel.</li>
              </ul>

              <table className="table-auto border-collapse border border-linha w-full text-center mt-5">
                <thead className="bg-yellow-300">
                  <tr className="border border-linha px-4 py-2">
                    <th className="border border-linha px-4 py-2">Tipo do Painel</th>
                    <th className="border border-linha px-4 py-2">Geração de Energia /mês /painel</th>
                    <th className="border border-linha px-4 py-2">Custo Unitário do Painel</th>
                    <th className="border border-linha px-4 py-2">Custo para 5 Painéis</th>
                    <th className="border border-linha px-4 py-2">Custo da Bateria de 5kWh</th>
                    <th className="border border-linha px-4 py-2">Custo Instalação</th>
                    <th className="border border-linha px-4 py-2">Economia Mensal</th>
                    <th className="border border-linha px-4 py-2">Tempo de Retorno do Investimento</th>
                    <th className="border border-linha px-4 py-2">Custo Total</th>
                    <th className="border border-linha px-4 py-2">Escolha o Plano</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border border-linha px-4 py-2">510 Wp</td>
                    <td className="border border-linha px-4 py-2">aprox. 63 kWh</td>
                    <td className="border border-linha px-4 py-2">R$ 1.500,00</td>
                    <td className="border border-linha px-4 py-2">R$ 7.500,00</td>
                    <td className="border border-linha px-4 py-2">R$ 1.500,00</td>
                    <td className="border border-linha px-4 py-2">R$ 1.500,00</td>
                    <td className="border border-linha px-4 py-2">R$ 30,00</td>
                    <td className="border border-linha px-4 py-2">52 meses</td>
                    <td className="border border-linha px-4 py-2">R$ 10.500,00</td>
                    <td className="border border-linha px-4 py-2"> 
                    <Link href='/responsavel'>
                      <button onClick={()=> handleSelection('Plano F-Básico')}  className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-700 transition duration-300">
                        <FaCheckCircle className="text-xl" /> Selecionar 
                      </button>
                    </Link>
                    </td>
                  </tr>
                
                
                  <tr>
                    <td className="border border-linha px-4 py-2">550 Wp</td>
                    <td className="border border-linha px-4 py-2">aprox. 68 kWh</td>
                    <td className="border border-linha px-4 py-2">R$ 1.750,00</td>
                    <td className="border border-linha px-4 py-2">R$ 8.750,00</td>
                    <td className="border border-linha px-4 py-2">R$ 1.500,00</td>
                    <td className="border border-linha px-4 py-2">R$ 1.750,00</td>
                    <td className="border border-linha px-4 py-2">R$ 33,00</td>
                    <td className="border border-linha px-4 py-2">54 meses</td>
                    <td className="border border-linha px-4 py-2">R$ 12.000,00</td>
                    <td className="border border-linha px-4 py-2"> 
                      <Link href='/responsavel'>
                        <button onClick={() => handleSelection('Plano F-Intermediário')}  className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-700 transition duration-300" >
                        <FaCheckCircle className="text-xl" /> Selecionar
                        </button>
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-linha px-4 py-2">590 Wp</td>
                    <td className="border border-linha px-4 py-2">aprox. 73 kWh</td>
                    <td className="border border-linha px-4 py-2">R$ 2.000,00</td>
                    <td className="border border-linha px-4 py-2">R$ 10.000,00</td>
                    <td className="border border-linha  px-4 py-2">R$ 1.500,00</td>
                    <td className="border border-linha px-4 py-2">R$ 2.000,00</td>
                    <td className="border border-linha px-4 py-2">R$ 36,00</td>
                    <td className="border border-linha px-4 py-2">56 meses</td>
                    <td className="border border-linha px-4 py-2">R$ 13.500,00</td>
                    <td className="border border-linha px-4 py-2"> 
                    <Link href='/responsavel'>
                      <button onClick={() => handleSelection('Plano F-Intermediário')}  className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-700 transition duration-300" >
                        <FaCheckCircle className="text-xl" /> Selecionar
                      </button>
                    </Link>
                    </td>
                  </tr>
                </tbody>


              </table>

            </div>

            {/* Plano Eólico*/}
            <div className=" bg-white p-4 rounded-md shadow-md border border-linha mb-4">
              <h3 className="text-2xl text-center font-semibold">Planos de Locação para Turbina Eólica</h3>
              <ul className="list-disc list-inside grid grid-cols-2 space-y-2 mt-10">
                <li>Inclui uma turbina eólica com suporte técnico e manutenção.</li>
                <li>Integração com software de monitoramento para acompanhamento do consumo.</li>
                <li>Valor da Instalção altera de acordo com o plano</li>
                <li>Para propriedades rurais com demanda energética média.</li>
              </ul>

              <table className="table-auto border-collapse border border-gray-400 w-full text-center mt-5">
                <thead className="bg-yellow-300">
                  <tr className="border border-linha px-4 py-2">
                    <th className="border border-linha px-4 py-2">Tipo de Turbina</th>
                    <th className="border border-linha px-4 py-2">Geração de Energia /mês /turbina</th>
                    <th className="border border-linha px-4 py-2">Custo Unitário da Turbina</th>
                    <th className="border border-linha px-4 py-2">Custo para 2 Turbinas</th>
                    <th className="border border-linha px-4 py-2">Custo do Sistema de Controle</th>
                    <th className="border border-linha px-4 py-2">Custo Instalação</th>
                    <th className="border border-linha px-4 py-2">Economia Mensal</th>
                    <th className="border border-linha px-4 py-2">Tempo de Retorno do Investimento</th>
                    <th className="border border-linha px-4 py-2">Custo Total</th>
                    <th className="border border-linha px-4 py-2">Escolha o Plano</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-linha px-4 py-2">3 kW</td>
                    <td className="border border-linha px-4 py-2">540 ~ 900 kWh</td>
                    <td className="border border-linha px-4 py-2">R$ 20.000,00</td>
                    <td className="border border-linha px-4 py-2">R$ 40.000,00</td>
                    <td className="border border-linha px-4 py-2">R$ 8.000,00</td>
                    <td className="border border-linha px-4 py-2">R$ 48.000,00</td>
                    <td className="border border-linha px-4 py-2">R$ 30.000,00</td>
                    <td className="border border-linha px-4 py-2">R$ 250,00</td>
                    <td className="border border-linha px-4 py-2">10 anos</td>
                    <td className="border border-linha px-4 py-2">
                    <Link href='/responsavel'>
                      <button onClick={()=> handleSelection('Plano E-Básico')}  className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-700 transition duration-300">
                        <FaCheckCircle className="text-xl" /> Selecionar
                      </button>
                    </Link>
                  </td>
                  </tr>
                  <tr>
                    <td className="border border-linha px-4 py-2">5 kW</td>
                    <td className="border border-linha px-4 py-2"> 900 ~ 1.500 kWh</td>
                    <td className="border border-linha px-4 py-2">R$ 35.000,00</td>
                    <td className="border border-linha px-4 py-2">R$ 70.000,00</td>
                    <td className="border border-linha px-4 py-2">R$ 10.000,00</td>
                    <td className="border border-linha px-4 py-2">R$ 80.000,00</td>
                    <td className="border border-linha px-4 py-2">R$ 45.000,00</td>
                    <td className="border border-linha px-4 py-2">R$ 400,00</td>
                    <td className="border border-linha px-4 py-2">9 anos e 4 meses</td>
                    <td className="border border-linha px-4 py-2">
                    <Link href='/responsavel'>
                      <button onClick={()=> handleSelection('Plano E-Intermediário')}  className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-700 transition duration-300">
                        <FaCheckCircle className="text-xl" /> Selecionar
                      </button>
                    </Link>
                  </td>
                  </tr>
                  <tr>
                    <td className="border border-linha px-4 py-2">10 kW</td>
                    <td className="border border-linha px-4 py-2">1.800 ~ 3.000 kWh</td>
                    <td className="border border-linha px-4 py-2">R$ 70.000,00</td>
                    <td className="border border-linha px-4 py-2">R$ 140.00,00</td>
                    <td className="border border-linha px-4 py-2">R$ 15.000,00</td>
                    <td className="border border-linha px-4 py-2">R$ 155.00,00</td>
                    <td className="border border-linha px-4 py-2">R$ 80.000.00</td>
                    <td className="border border-linha px-4 py-2">R$ 700,00</td>
                    <td className="border border-linha px-4 py-2">9 anos e 5 meses</td>
                    <td className="border border-linha px-4 py-2">
                    <Link href='/responsavel'>
                      <button onClick={()=> handleSelection('Plano E-Avançado')}  className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-700 transition duration-300">
                        <FaCheckCircle className="text-xl" /> Selecionar
                      </button>
                    </Link>
                  </td>
                  </tr>
                </tbody>
              </table>



            </div>           
        </section>

        {/* Planos de locação das Baterias */}
        <section className="bg-white border border-linha rounded-lg shadow-lg m-4 p-6">
        <h3 className="text-2xl text-center font-semibold text-padrao p-6">Planos para Locação de Baterias</h3>
 
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-400 w-full text-center">
            <thead className="bg-yellow-300">
              <tr className="border border-linha px-4 py-2">
                <th className="border border-linha px-4 py-2 text-sm sm:text-base">Modelo</th>
                <th className="border border-linha px-4 py-2 text-sm sm:text-base">Capacidade</th>
                <th className="border border-linha px-4 py-2 text-sm sm:text-base">Custo da Instalação</th>
                <th className="border border-linha px-4 py-2 text-sm sm:text-base">Locação Mensal</th>
                <th className="border border-linha px-4 py-2 text-sm sm:text-base">Locação Anual</th>
                <th className="border border-linha px-4 py-2 text-sm sm:text-base">Selecione a Bateria</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-linha px-4 py-2 text-sm sm:text-base">
                  Bateria Residencial e Pequenos Negócios
                </td>
                <td className="border border-linha px-4 py-2 text-sm sm:text-base">5 kWh</td>
                <td className="border border-linha px-4 py-2 text-sm sm:text-base">R$ 500,00</td>
                <td className="border border-linha px-4 py-2 text-sm sm:text-base">R$ 250,00</td>
                <td className="border border-linha px-4 py-2 text-sm sm:text-base">
                  R$ 2.700,00 (10% de desconto)
                </td>
                <td className="border border-linha px-4 py-2">
                  <Link href='/responsavel'>
                    <button onClick={()=> handleSelection('Plano B-Básico')}  className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-700 transition duration-300">
                      <FaCheckCircle className="text-xl" /> Selecionar
                    </button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="border border-linha px-4 py-2 text-sm sm:text-base">
                  Bateria Médio Porte
                </td>
                <td className="border border-linha px-4 py-2 text-sm sm:text-base">10 kWh</td>
                <td className="border border-linha px-4 py-2 text-sm sm:text-base">R$ 800,00</td>
                <td className="border border-linha px-4 py-2 text-sm sm:text-base">R$ 400,00</td>
                <td className="border border-linha px-4 py-2 text-sm sm:text-base">
                  R$ 4.320,00 (10% de desconto)
                </td>
                <td className="border border-linha px-4 py-2">
                  <Link href='/responsavel'>
                    <button onClick={()=> handleSelection('Plano B-Básico2')}  className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-700 transition duration-300">
                      <FaCheckCircle className="text-xl" /> Selecionar
                    </button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="border border-linha px-4 py-2 text-sm sm:text-base">
                  Bateria Comercial
                </td>
                <td className="border border-linha px-4 py-2 text-sm sm:text-base">20 kWh</td>
                <td className="border border-linha px-4 py-2 text-sm sm:text-base">R$ 1.200,00</td>
                <td className="border border-linha px-4 py-2 text-sm sm:text-base">R$ 700,00</td>
                <td className="border border-linha px-4 py-2 text-sm sm:text-base">
                  R$ 7.140,00 (15% de desconto)
                </td>
                <td className="border border-linha px-4 py-2">
                  <Link href='/responsavel'>
                    <button onClick={()=> handleSelection('Plano B-Intermediario')}  className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-700 transition duration-300">
                      <FaCheckCircle className="text-xl" /> Selecionar
                    </button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="border border-linha px-4 py-2 text-sm sm:text-base">
                  Bateria Industrial e Propriedades Rurais
                </td>
                <td className="border border-linha px-4 py-2 text-sm sm:text-base">50 kWh</td>
                <td className="border border-linha px-4 py-2 text-sm sm:text-base">2.500,00</td>
                <td className="border border-linha px-4 py-2 text-sm sm:text-base">R$ 1.200,00</td>
                <td className="border border-linha px-4 py-2 text-sm sm:text-base">
                  R$ 11.520,00 (20% de desconto)
                </td>
                <td className="border border-linha px-4 py-2">
                  <Link href='/responsavel'>
                    <button onClick={()=> handleSelection('Plano B-Avançado')}  className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-700 transition duration-300">
                      <FaCheckCircle className="text-xl" /> Selecionar
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
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
              <Link href='/responsavel'>
                  <button onClick={()=> handleSelection('Plano Básico')}  className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-700 transition duration-300">
                    <FaCheckCircle className="text-xl" /> Selecionar
                  </button>
                </Link>
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
              <Link href='/responsavel'>
                <button onClick={()=> handleSelection('Plano Básico')}  className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-700 transition duration-300">
                  <FaCheckCircle className="text-xl" /> Selecionar
                </button>
              </Link>
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
              <Link href='/responsavel'>
                <button onClick={()=> handleSelection('Plano Básico')}  className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-700 transition duration-300">
                  <FaCheckCircle className="text-xl" /> Selecionar
                </button>
              </Link>
            </div>
          </div>
        </section>



        {/* Seção Serviços de Manutenção */}
        <section id="manutencao" className="p-8 ">
          <h2 className="text-3xl text-center font-semibold text-padrao p-6">Realizamos Manutenções dos Equipamentos</h2>
        
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6'>
            <Image src={manut} alt='manut' className="hover:w-full border-4 border-linha"></Image>
            <Image src={manuteolica} alt='manuteolica' className="hover:w-full border-4 border-linha"></Image>
            <Image src={manutBat} alt='ManutBat' className="hover:w-full border-4 border-linha"></Image>
            <Image src={manut2} alt='manut2' className="hover:w-full border-4 border-linha"></Image>
            <Image src={manuteolica2} alt='manuteolica2' className="hover:w-full border-4 border-linha"></Image>
            <Image src={manuteolica3} alt='manuteolica3' className="hover:w-full border-4 border-linha"></Image>
          </div>
            <h3 className='text-3xl text-center gap-8 hover:text-red-600'>Faça um orçamento, consulte nossos valores e pacotes de serviços! </h3>
        </section>

        
      </div>
    </main>
  )
}
