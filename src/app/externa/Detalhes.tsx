
import Image from "next/image"
import misto2 from "../../image/misto2.jpg"
import solarpercuaria from "../../image/solarpecuaria.jpg"
import eolicamar from "../../image/eolicamar.jpg"
import solarurbano2 from "../../image/solarurbano2.jpg"

export default function Detalhes(){

  return(

    <section>
      <article>
        <h2>Como Fazer a Transição de Fonte de Energia?</h2>
        <p>A transição de fontes de energia tradicionais, como petróleo, gás e carvão, para fontes renováveis, como solar, eólica e biomassa, 
          requer planejamento, tecnologia e investimento. Primeiramente, é importante mapear as necessidades 
          energéticas da empresa, comunidade, propriedades rurais e identificar as fontes renováveis mais adequadas ao local, 
          considerando clima, geografia e infraestrutura. Em seguida, é preciso buscar tecnologias e 
          soluções para captar, converter e armazenar essa energia, como painéis solares, turbinas eólicas entre outras fontes de energia sustentável.

          Para viabilizar essa transição, empresas e cidadãos podem se beneficiar de incentivos fiscais, linhas de 
          crédito e políticas públicas que incentivem o uso de energia renovável. Além disso, o monitoramento dos ganhos 
          ambientais e econômicos contribui para avaliar o impacto positivo e ajustar a estratégia de forma sustentável.</p>

        <Image src={misto2} alt="misto2"></Image>
        <Image src={solarpercuaria} alt="solarpecuaria"></Image>

      </article>

      <article>
        <h2>Onde Montar a Estrutura?</h2>
        <p>A escolha do local para montar uma estrutura de energia renovável 
          depende da fonte escolhida e das características geográficas e climáticas do local. Para energia solar, é ideal instalar
           painéis fotovoltaicos em áreas com alta incidência de luz solar, como telhados de edifícios ou terrenos amplos e desimpedidos. 
           Para a energia eólica, regiões com ventos constantes e intensos, como áreas costeiras ou montanhosas, são mais vantajosas para 
           turbinas eólicas. Já a biomassa requer proximidade com fontes de resíduos orgânicos ou agrícolas.

          Além da localização, é importante considerar a infraestrutura existente e a proximidade de redes de distribuição de energia para 
          minimizar
          custos de transmissão e otimizar o uso da energia gerada.</p>

          <Image src={eolicamar} alt="eolicamar"></Image>
          <Image src={solarurbano2} alt="solarurbano2"></Image>

      </article>

      <article>
        <h2>Quais Benefícios da ENERGIA RENOVÁVEL da PIECS?</h2>
        <p>A Plataforma Integrada de Energia Comunitária e Sustentável (PIECS) oferece uma solução acessível e sustentável
           para o acesso à energia renovável. Com um modelo de locação de equipamentos, ela democratiza o uso de turbinas eólicas, 
           placas solares e baterias, tornando a geração de energia verde viável para pequenas e médias empresas e residências, inclusive em áreas rurais.

          O diferencial da PIECS está na combinação de tecnologias avançadas, como inteligência artificial e chatbot, e em uma interface amigável 
          que permite monitorar o consumo e a geração de energia em tempo real. Assim, os usuários podem acompanhar seu impacto ambiental e otimizar seu uso energético. Ao eliminar as barreiras de custo inicial e oferecer manutenção completa, a PIECS ajuda a tornar o acesso à energia renovável uma realidade prática e acessível para todos.</p>
      </article>
    </section>
  )
}