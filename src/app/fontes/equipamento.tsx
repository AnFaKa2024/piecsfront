import Image from "next/image"
import misto2 from '../../image/misto2.jpg'
import rural from   '../../image/solar-rural.jpg'
import agro from '../../image/eolica-agro.jpg'
import eolica from '../../image/eolica.jpg'
import pecuaria from '../../image/solar-pecuaria1.jpg'
import urbano from '../../image/solar-urbano.jpg'
import urb2 from '../../image/solar-urbano1.jpg'
import rural1 from '../../image/solar-rural1.jpg'


export default function Equipamento(){

  return(

    <main className="grow text-padrao p-8">

      <h1 className="text-padrao text-5xl text-center">Fontes de Energia Renováveis usadas pela PIECS</h1>

      <h2 className="text-center text-padrao text-3xl font-semibold mt-20">Placas Fotovoltaicas</h2>

      <p className="text-center leading-10 mb-10 text-padrao text-xl mt-10">Placas fotovoltaicas são dispositivos que convertem a luz solar diretamente em eletricidade, utilizando células solares compostas por materiais semicondutores, como o silício. Quando a luz do sol atinge essas células, ela libera elétrons, criando uma corrente elétrica. As placas podem ser utilizadas em diversas escalas, desde pequenos sistemas residenciais até grandes usinas solares.</p>

      <div className="grid grid-col md:grid-cols-3 gap-8">
        <div className="p-6 border rounded-lg shadow-md border-l-4 border-padrao hover:bg-yellow-300">
          <h3 className="text-xl text-center font-semibold mb-4">Principais Características</h3>
          <p className="text-justify leading-10 mb-10 text-padrao text-lg"><strong>Eficiência</strong> A eficiência das placas fotovoltaicas depende da qualidade do material semicondutor e do design da célula solar. Tecnologias modernas alcançam eficiências de até 20% em sistemas comerciais, com avanço contínuo em direção a valores mais altos.</p>  
          <p className="text-justify leading-10 mb-10 text-padrao text-lg"><strong>Aplicações</strong> Podem ser instaladas em telhados, fazendas solares ou até em estruturas flutuantes sobre lagos e mares, aproveitando terrenos improdutivos.</p>
          <p className="text-justify leading-10 mb-10 text-padrao text-lg"><strong>Sustentabilidade</strong> A energia solar é renovável e reduz a dependência de combustíveis fósseis, sendo crucial para a descarbonização da matriz energética.</p>
          <p className="text-justify leading-10 mb-10 text-padrao text-lg"><strong>Impacto Ambiental</strong> O impacto ambiental durante a produção das placas existe, mas é compensado pela sua operação livre de emissões de carbono.</p>
        </div>   
      

  
        <div className="p-6 border rounded-lg shadow-md border-l-4 border-padrao hover:bg-yellow-300">
          <h3 className="text-xl text-center font-semibold mb-4">Vantagens</h3>
          <p className="text-justify leading-10 mb-10 text-padrao text-lg">Baixo custo operacional e de manutenção.</p>
          <p className="text-justify leading-10 mb-10 text-padrao text-lg">Geração de energia silenciosa e sem poluição.</p>
          <p className="text-justify leading-10 mb-10 text-padrao text-lg">Pode ser combinada com baterias para armazenamento de energia e uso noturno.</p>
        </div>
    

  
        <div className="p-6 border rounded-lg shadow-md border-l-4 border-padrao hover:bg-yellow-300">
          <h3 className="text-xl text-center font-semibold mb-4">Desvantagens</h3>
          <p className="text-justify leading-10 mb-10 text-padrao text-lg">Depende da luz solar, então a produção varia com o clima e a estação do ano.</p>
          <p className="text-justify leading-10 mb-10 text-padrao text-lg">Ocupa uma área considerável para grandes produções, o que pode limitar a instalação em áreas urbanas densas.</p>
        </div>
      
      </div>

          <div className=" grid grid-cols-4 p-6  justify-items-center">
            <Image src={urbano} alt="" className="hover:w-96 border-4 border-linha"></Image> 
            <Image src={pecuaria} alt="" className="hover:w-96 border-4 border-linha"></Image>
            <Image src={urb2} alt="" className="hover:w-96 border-4 border-linha"></Image>
            <Image src={rural1} alt="" className="hover:w-96 border-4 border-linha"></Image>
          </div>

      <h2 className="text-center text-padrao text-3xl font-semibold mt-20">Turbinas Eólicas</h2>
      <p className="text-center mb-10 leading-10 text-padrao text-xl mt-10">As turbinas eólicas transformam a energia cinética dos ventos em eletricidade. Elas são compostas por pás que giram quando atingidas pelo vento, movimentando um eixo que, por sua vez, ativa um gerador elétrico. As turbinas podem ser instaladas em terra (onshore) ou no mar (offshore), sendo as últimas mais eficientes devido aos ventos mais fortes e constantes.</p>


      <div className="grid grid-col md:grid-cols-3 gap-8">
        <div className="p-6 border rounded-lg shadow-md border-l-4 border-padrao hover:bg-yellow-300">
          <h3 className="text-xl text-center font-semibold mb-4">Principais Características</h3>
          <p className="text-justify leading-10 mb-10 text-padrao text-lg"><strong>Eficiência</strong> A eficiência das turbinas eólicas varia com o design e a localização, mas os modelos mais recentes conseguem captar uma grande porcentagem da energia cinética disponível, especialmente em áreas com ventos constantes.</p>
          <p className="text-justify leading-10 mb-10 text-padrao text-lg"><strong>Tecnologia Offshore</strong> Turbinas instaladas no mar podem ser maiores e gerar mais energia devido a menos restrições de espaço e condições de vento mais favoráveis.</p>
          <p className="text-justify leading-10 mb-10 text-padrao text-lg"><strong>Ciclos de Vida</strong> As turbinas têm vida útil de cerca de 20 a 25 anos, e são amplamente recicláveis, especialmente os metais.</p>
        </div>
      

    
        <div className="p-6 border rounded-lg shadow-md border-l-4 border-padrao hover:bg-yellow-300">
          <h3 className="text-xl text-center font-semibold mb-4">Vantagens</h3>
          <p className="text-justify leading-10 mb-10 text-padrao text-lg">Produz eletricidade sem emissões de gases de efeito estufa.</p>
          <p className="text-justify leading-10 mb-10 text-padrao text-lg">Pode operar 24 horas, dependendo da constância dos ventos.</p>
          <p className="text-justify leading-10 mb-10 text-padrao text-lg">Instalações offshore preservam o uso de terras e podem coexistir com atividades marítimas.</p>
        </div>
      

    
        <div className="p-6 border rounded-lg shadow-md border-l-4 border-padrao hover:bg-yellow-300">
          <h3 className="text-xl text-center font-semibold mb-4">Desvantagens</h3>
          <p className="text-justify leading-10 mb-10 text-padrao text-lg">Impacto visual e sonoro em áreas residenciais, o que limita a instalação perto de zonas urbanas.</p>
          <p className="text-justify leading-10 mb-10 text-padrao text-lg">Depende de condições de vento adequadas para operação eficiente.</p>
          <p className="text-justify leading-10 mb-10 text-padrao text-lg">Impacto sobre a fauna local, especialmente aves, embora tecnologias para mitigar esses efeitos estejam em desenvolvimento.</p>
        </div>
      </div>

        <div className=" grid grid-cols-4 p-6  justify-items-center">
          <Image src={eolica} alt="" className="hover:w-96 border-4 border-linha"></Image> 
          <Image src={agro} alt="" className="hover:w-96 border-4 border-linha"></Image>
          <Image src={rural} alt="" className="hover:w-96 border-4 border-linha"></Image>
          <Image src={misto2} alt="" className="hover:w-96 border-4 border-linha"></Image>
        </div>
      
      <h2 className="text-center mb-10 leading-10 text-padrao text-3xl mt-10">Tanto as placas fotovoltaicas quanto as turbinas eólicas são fundamentais na transição para uma matriz energética limpa. A combinação de ambas pode resultar em sistemas híbridos que garantem um fornecimento mais constante de energia renovável.</h2>
    </main>
  )
}