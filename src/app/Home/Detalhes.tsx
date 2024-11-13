
import Image from "next/image"
import misto2 from "../../image/misto2.jpg"
import solarpercuaria from "../../image/solarpecuaria.jpg"
import eolicamar from "../../image/eolicamar.jpg"
import solarurbano2 from "../../image/solarurbano2.jpg"
import misto from '../../image/mistoSeoloca.jpg'
import sistema from '../../image/sistColeta.jpg'
import solarAgro from '../../image/solaragro2.jpg'
import estacionamento from '../../image/solarestacionamento.jpg'
import ovino from '../../image/solar-pecuaria3.jpg'
import urb3 from '../../image/solar-urbano3.jpg'
import urb4 from '../../image/solar-urbano4.jpg'
import estacao from '../../image/estacaoeolica.jpg'



export default function Detalhes(){

  return(

    <section className="p-8 ">
      <article>
        <h2 className="text-padrao text-3xl text-center font-bold">Como Fazer a Transição de Fonte de Energia?</h2>
        <p className="text-justify leading-10 mb-10 text-padrao text-lg mt-3">A transição de fontes de energia tradicionais, como petróleo, gás e carvão, para fontes renováveis, como solar, eólica e biomassa, 
          requer planejamento, tecnologia e investimento. Primeiramente, é importante mapear as necessidades 
          energéticas da empresa, comunidade, propriedades rurais e identificar as fontes renováveis mais adequadas ao local, 
          considerando clima, geografia e infraestrutura. Em seguida, é preciso buscar tecnologias e 
          soluções para captar, converter e armazenar essa energia, como painéis solares, turbinas eólicas entre outras fontes de energia sustentável.

          Para viabilizar essa transição, empresas e cidadãos podem se beneficiar de incentivos fiscais, linhas de 
          crédito e políticas públicas que incentivem o uso de energia renovável. Além disso, o monitoramento dos ganhos 
          ambientais e econômicos contribui para avaliar o impacto positivo e ajustar a estratégia de forma sustentável.</p>

          <div className=" grid grid-cols-4 p-6  justify-items-center">
            <Image src={misto2} alt="misto2" className="hover:w-96 border-4 border-linha"></Image> 
            <Image src={solarpercuaria} alt="solarpecuaria" className="hover:w-96 border-4 border-linha"></Image>
            <Image src={misto} alt="mistosoleolico" className="hover:w-96 border-4 border-linha"></Image>
            <Image src={sistema} alt="sistema" className="hover:w-96 border-4 border-linha"></Image>

          </div>
       

      </article>

      <article>
        <h2 className="text-padrao text-3xl text-center font-bold mt-6">Onde Montar a Estrutura?</h2>
        <p className="text-justify leading-10 mb-10 text-padrao text-lg mt-3">A escolha do local para montar uma estrutura de energia renovável 
          depende da fonte escolhida e das características geográficas e climáticas do local. Para energia solar, é ideal instalar
           painéis fotovoltaicos em áreas com alta incidência de luz solar, como telhados de edifícios ou terrenos amplos e desimpedidos. 
           Para a energia eólica, regiões com ventos constantes e intensos, como áreas costeiras ou montanhosas, são mais vantajosas para 
           turbinas eólicas. Já a biomassa requer proximidade com fontes de resíduos orgânicos ou agrícolas.

          Além da localização, é importante considerar a infraestrutura existente e a proximidade de redes de distribuição de energia para 
          minimizar
          custos de transmissão e otimizar o uso da energia gerada.</p>

          <div className=" grid grid-cols-4 p-6  justify-items-center">
          <Image src={solarAgro} alt="solaragro" className="hover:w-96 border-4 border-linha"></Image>
          <Image src={estacionamento} alt="estacionamento" className="hover:w-96 border-4 border-linha"></Image>
          <Image src={eolicamar} alt="eolicamar" className="hover:w-96 border-4 border-linha"></Image> 
          <Image src={solarurbano2} alt="solarurbano2" className="hover:w-96 border-4 border-linha"></Image>
          </div>

      </article>

      <article>
        <h2 className="text-padrao text-3xl text-center font-bold mt-6">Quais Benefícios da ENERGIA RENOVÁVEL da PIECS?</h2>
        <p className="text-justify leading-10 mb-10 text-padrao text-lg mt-3">A Plataforma Integrada de Energia Comunitária e Sustentável (PIECS) oferece uma solução acessível e sustentável
           para o acesso à energia renovável. Com um modelo de locação de equipamentos, ela democratiza o uso de turbinas eólicas, 
           placas solares e baterias, tornando a geração de energia verde viável para pequenas e médias empresas e residências, inclusive em áreas rurais.

          O diferencial da PIECS está na combinação de tecnologias avançadas, como inteligência artificial e chatbot, e em uma interface amigável 
          que permite monitorar o consumo e a geração de energia em tempo real. Assim, os usuários podem acompanhar seu impacto ambiental e otimizar seu uso energético. Ao eliminar as barreiras de custo inicial e oferecer manutenção completa, a PIECS ajuda a tornar o acesso à energia renovável uma realidade prática e acessível para todos.</p>

          <div className=" grid grid-cols-4 p-6  justify-items-center">
          <Image src={ovino} alt="ovino" className="hover:w-96 border-4 border-linha"></Image>
          <Image src={urb3} alt="ubr3" className="hover:w-96 border-4 border-linha"></Image>
          <Image src={estacao} alt="estacao" className="hover:w-96 border-4 border-linha"></Image> 
          <Image src={urb4} alt="urb4" className="hover:w-96 border-4 border-linha"></Image>
          </div>
      
      </article>
    </section>
  )
}