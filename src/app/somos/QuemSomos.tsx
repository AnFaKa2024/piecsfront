// página de apresentação dos grupo que desenvolveu o software

import Image from "next/image"
import Karen from "../../image/Karen.png"
import Fernanda from "../../image/Fernanda.png"
import Emily from "../../image/Emily.png"


export default function QuemSomos(){

  

  return(
    
    <main className="grow text-padrao p-8">
      <h1 className="text-center font-bold text-5xl gap-2">Quem Somos</h1>
      <article className="text-justify text-2xl mt-16">
        <p className="leading-10 indent-11">Somos três alunas dedicadas do curso de Análise e Desenvolvimento de Sistemas, 
          estamos desenvolvendo um projeto inovador de tecnologia aplicada na área de energia renovável.
          Formamos um grupo empenhado em criar uma solução de software focada em promover a geração e distribuição de energia limpa por meio de uma rede de pequenas centrais de energia renovável em comunidades. Cada uma traz uma combinação única de habilidades em programação, design e gerenciamento de projetos, colaborando para transformar ideias em soluções tecnológicas concretas. 
          O projeto reflete o nosso compromisso com inovação e excelência no desenvolvimento de software.</p>
      </article>

      <section className="grid grid-cols-3 justify-evenly p-4 mt-4">
        
        
        <div className="p-6 max-w-sm mx-auto border border-linha rounded-xl shadow-md space-y-4">
          <div className="text-center">
            <Image src={Fernanda} alt="Fernanda"></Image>
          </div>

          <div className="text-center text-xl">
            <p><b>Turma: 1TDSPI</b></p>
            <h2>Fernanda Budniak de Seda</h2>
            <p>RM - 558274</p>
          </div>

          <div className="bg-claro hover:bg-white p-4 border border-linha rounded-lg text-center space-y-2">
              <h3>Contatos e Trabalhos Realizados </h3>
              <p>GitHub: https://github.com/Febudniak</p>
              <p>Linkdin: https://www.linkedin.com/in/fernanda-budniak-de-seda-4022382b6/ </p>
          </div>
        </div>

        <div className="p-6 max-w-sm mx-auto border border-linha rounded-xl shadow-md space-y-4">
          <div className="text-center">
            <Image src={Karen} alt="Karen"></Image>
          </div>

          <div className="text-center text-xl">
            <p><b>Turma: 1TDSPI</b></p>
            <h2>Karen Marques dos Santos</h2>
            <p>RM - 554556</p>
          </div>

          <div className="bg-claro hover:bg-white p-4 border border-linha rounded-lg text-center space-y-2">
              <h3>Contatos e Trabalhos Realizados </h3>
              <p>GitHub: https://github.com/AstorBia</p>
              <p>Linkdin: https://www.linkedin.com/in/karen-marques-tech-dev </p>
          </div>
        </div>
        
        <div className="p-6 max-w-sm mx-auto border border-linha rounded-3xl shadow-md space-y-4">
          <div className="text-center">
            <Image src={Emily} alt="Emily"></Image>
          </div>
          
          <div className="text-center text-xl">
            <p><b>Turma: 1TDSPG</b></p>
            <h2>Emily Maria de Oliveira Macedo</h2>
            <p>RM - 554882</p>
          </div>

          <div className="bg-claro hover:bg-white p-4 border border-linha rounded-lg text-center space-y-2">
              <h3>Contatos e Trabalhos Realizados</h3>
              <p>GitHub: https://github.com/Emily27289</p>
              <p>Linkdin: https://www.linkedin.com/in/emily-macedo-5a9474329/ </p>
              
          </div>
        </div>
        
        

      </section>
    </main>
  )
}