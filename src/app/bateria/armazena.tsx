import Image from "next/image"
import bateria from '../../image/baterias.jpg'
import bat1 from '../../image/baterias1.jpg'
import visor from '../../image/baterias-c-visor.jpg'
import faz from '../../image/baterias-fazenda.jpg'

export default function Armazena(){

  return(
    <main className="grow text-padrao p-8">
      <h1 className="text-padrao text-5xl text-center">Detalhes sobre a Bateria usada pela PICES</h1>

      <h2 className="text-center text-padrao text-3xl font-semibold mt-20">Capacidade de Armazenamento</h2>
      <p className="text-justify leading-10 mb-10 text-padrao text-lg">A capacidade de uma bateria determina quanto de energia pode ser armazenada. 
        Diferentes baterias possuem capacidades variadas para atender diferentes necessidades de energia.</p>
      <p className="text-justify leading-10 mb-10 text-padrao text-lg">A capacidade de armazenamento de uma bateria é um dos principais fatores que definem sua eficiência e aplicação em sistemas de energia sustentável. Esse parâmetro indica a quantidade total de energia que uma bateria pode armazenar e disponibilizar quando necessário. Em um cenário de energias renováveis, onde fontes como a solar e a eólica podem apresentar variabilidade, a capacidade de armazenamento é essencial para garantir a continuidade no fornecimento de energia, mesmo quando essas fontes estão momentaneamente indisponíveis (como durante a noite ou em dias sem vento).</p>
      <p className="text-justify leading-10 mb-10 text-padrao text-lg">Baterias de maior capacidade são projetadas para aplicações que exigem alta demanda energética, como em sistemas de armazenamento residencial e em usinas de energia renovável em larga escala. Já baterias com menor capacidade são mais adequadas para dispositivos de menor consumo e para backup em situações de emergência. A diversidade nas capacidades permite que o mercado de armazenamento de energia ofereça soluções adaptadas a diferentes contextos, desde o uso doméstico até grandes projetos de infraestrutura, facilitando a integração de fontes renováveis ao sistema elétrico e promovendo uma transição mais sustentável.</p>
      
      <h2 className="text-center text-padrao text-3xl font-semibold">Tipo de Bateria adotada pela PIECS</h2>
      
      <p className="text-justify leading-10 mb-10 text-padrao text-lg"><b>Baterias de Íons de Lítio - </b>
      <strong>  Descrição</strong> São atualmente as mais populares para aplicações em armazenamento de energia renovável, devido à sua alta densidade de energia e eficiência de ciclo.
      <strong>  Vantagens</strong> Possuem alta capacidade de armazenamento em relação ao peso, ciclo de vida longo e alta eficiência, com baixo nível de autodescarga.
      <strong>  Desvantagen:</strong> O custo é relativamente alto, e sua produção envolve materiais limitados, como lítio e cobalto, o que gera preocupações ambientais e de custo a longo prazo.
      <strong>  Aplicações</strong> Usadas em sistemas residenciais, comerciais e em usinas de grande porte. São as mais comuns em veículos elétricos.</p>

       <div className=" grid grid-cols-4 p-6  justify-items-center">
        <Image src={bateria} alt="bateria" className="hover:w-96 border-4 border-linha"></Image>
        <Image src={bat1} alt="bat1" className="hover:w-96 border-4 border-linha"></Image>
        <Image src={visor} alt="visor" className="hover:w-96 border-4 border-linha"></Image>
        <Image src={faz} alt="faz" className="hover:w-96 border-4 border-linha"></Image>
       </div>     
 

    </main>
  )
}