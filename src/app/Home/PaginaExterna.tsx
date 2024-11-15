// essa será a página para todos
// a página principal 
// no campo LOGIN - abrirá um "desfio" para logar quem é o responsável e quem é associado
// Nessa págia terá a proganda do nosso produto
// terá o valor do negócio
// terá o propósito da PIECS

import Image from "next/image"

import escalonamento1 from '../../image/escalonamento (2).png'
import grafico from '../../image/grafico.png'
import { useState } from 'react'

export default function PaginaExterna(){

  const [openArticles, setOpenArticles] = useState([false, false, false])

 
  const toggleArticle = (index: number) => {
    setOpenArticles((prev) => {
      const newOpenArticles = [...prev]
      newOpenArticles[index] = !newOpenArticles[index]
      return newOpenArticles;
    })
  }


  return(

    <main className="grow text-padrao p-8">
        
        <h1 className="text-4xl font-semibold text-center mb-8 text-padrao">PIECS</h1>
        <p className="text-justify leading-10 mb-10 text-padrao text-lg">Uma plataforma digital inovadora que promove a geração e distribuição de energia limpa
           por meio de uma rede de pequenas centrais de energia renovável em comunidades. Ao integrar um 
           sistema de geração descentralizada, um mercado de energia peer-to-peer (P2P) e inteligência 
           artificial (IA) para otimização do consumo, a PIECS não só proporciona uma solução eficiente para o 
           fornecimento de energia, mas também gera impacto social positivo e contribui para a sustentabilidade 
           econômica e ambiental. Além disso, a plataforma utiliza tecnologias de ponta para incentivar o 
           desenvolvimento comunitário, alinhada a dados e indicadores de desempenho que permitem uma 
           implementação prática e com alto potencial de replicação em diversas localidades, ampliando seu 
           impacto nas esferas ambiental, social e econômica.</p>

        <h2 className="text-center text-3xl font-semibold">Alguns Artigos técnicos e Trabalhos Científicos</h2>
        <p className="text-center mt-4 text-linha underline">Clique nos Títulos dos artigos para saber mais!!</p>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">

        <article className="bg-white border-l-4 border-padrao hover:bg-yellow-300 p-6 shadow-lg rounded-lg hover:scale-105 transition-transform">
          <h2 onClick={() => toggleArticle(0)} className="font-semibold text-xl text-center text-green-950 mb-2 gap-5">Escalonamento da energia eólica comunitária: a relevância da autonomia e da comunidade</h2>
            
          {openArticles[0] && (
            <div>

            <p className="text-justify leading-10 mb-10 text-padrao text-lg">A energia renovável, especialmente a energia eólica, está se expandindo rapidamente na Suécia e em outros
             lugares e deixou o nicho para se tornar parte do regime sociotécnico de energia convencional.
              No entanto, a inovação social da energia eólica de propriedade da comunidade não está se expandindo 
              paralelamente. Apesar de seu potencial para uma transição energética inclusiva e para aliviar conflitos, a energia comunitária continua sendo um fenômeno de nicho. Neste artigo, exploramos as condições para a expansão da energia da comunidade. O upscaling às vezes é considerado estranho ao espírito da energia comunitária, mas argumentamos que pode ser positivo e, assumindo a existência de uma "armadilha de energia eólica comunitária" - aumento da concorrência no mercado e diminuição do apoio governamental - até mesmo necessário para a sobrevivência a longo prazo da energia eólica comunitária. Estudamos particularmente como duas variáveis se relacionam
             com o upscaling: autonomia e comunidade, esta última dividida em comunidades de interesse e lugar.</p>
            <br />           
            
            <Image src={escalonamento1} alt="quadro4" className="my-4"></Image>
            
            <p className="text-center font-semibold text-sm"><strong>Para mais informações acesse o link abaixo</strong></p>
            <a href='https://energsustainsoc.biomedcentral.com/articles/10.1186/s13705-023-00411-6' className="text-center font-semibold text-sm text-blue-500 underline">
            Fonte: energsustainsoc.biomedcentral.com</a>
            
            </div>
            )}
            
        </article>

        <article className="bg-white border-l-4 border-padrao hover:bg-yellow-300 p-6 shadow-lg rounded-lg hover:scale-105 transition-transform">
          <h2 onClick={() => toggleArticle(1)} className="font-semibold text-center text-xl mb-2">Community Engagement and Equity in Renewable Energy Projects:  A Literature Review</h2>
         
          {openArticles[1] && (
          
          <div>
            <p className="text-justify leading-10 mb-10 text-padrao text-lg">O relatório investiga a relação entre engajamento comunitário e equidade energética na implantação 
              de infraestruturas de bioenergia, tema pouco explorado em estudos anteriores. Ao ampliar a análise, 
              o objetivo é identificar e explicar as conexões entre engajamento, equidade e melhores práticas para
              tornar os projetos de energia renovável mais justos e inclusivos. A pesquisa fornece orientações 
              para o Departamento de Energia dos EUA e outros interessados sobre a importância do engajamento 
              comunitário, mostrando como ele impacta a aceitação social, a democracia energética e os resultados
                equitativos. O foco do estudo são projetos de energia em grande escala, como usinas eólicas e
                solares, em vez de tecnologias voltadas para o consumidor final. O relatório discute a metodologia,
                conceitos relevantes e uma análise de 51 artigos sobre o tema, concluindo com lições aprendidas e
                oportunidades para implementação.</p>
            
            <Image src={grafico} alt="grafico" className="my-4"></Image>
            <p className="text-justify leading-10 mb-10 text-padrao hover:bg-yellow-300 text-lg"><strong>Para mais informações acesse o link abaixo</strong></p>
            <a href='https://www.nrel.gov/docs/fy23osti/87113.pdf' className="text-center font-semibold text-sm text-blue-500 underline">
            Fonte: nrel.gov/docs</a>
          </div>
          )}
        </article>

        <article className="bg-white border-l-4 border-padrao hover:bg-yellow-300 p-6 shadow-lg rounded-lg hover:scale-105 transition-transform">
          <h2  onClick={() => toggleArticle(2)}className="font-semibold text-center text-xl mb-2">Por que as empresas devem investir em energia renovável?</h2>
          {openArticles[2] && (
           
           <div>

            <p className="text-justify leading-10 mb-10 text-padrao text-lg">Economia nos custos, criação de valor para a marca, contribuição para o desenvolvimento sustentável e cumprimento de compromissos com os aspectos ESG (sigla em inglês para ambiental, social e de governança) são algumas das vantagens das empresas ao investir no consumo de energia renovável. 
              Fontes limpas, com destaque para a eólica e a solar, estão em crescimento no país e as companhias são fundamentais nessa expansão. Agir no combate às mudanças climáticas é uma necessidade de toda a sociedade e empresas podem fazer a sua parte 
              adotando iniciativas como a redução das emissões de GEE, o que demanda um maior consumo de energia limpa. Em um momento em que as práticas ESG são cada vez mais relevantes, como demonstra o aumento das buscas pelo termo no Google, adotar energias renováveis pode contribuir para o posicionamento 
              estratégico das empresas, além de refletir em diversas vantagens para elas, para o meio ambiente e para o consumidor final. </p>

            <p className="text-justify text-gray-700"><strong>Para mais informações acesse o link abaixo</strong></p>
            <a href='https://ieeexplore.ieee.org/document/8721134' className="text-center font-semibold text-sm text-blue-500 underline">
                       Fonte: ieeexplore.ieee.org</a>
            </div>
          )}
        </article>

      </section>


    </main>
  )
}