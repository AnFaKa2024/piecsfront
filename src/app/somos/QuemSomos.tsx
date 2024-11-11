// página de apresentação dos grupo que desenvolveu o software

import Image from "next/image"
import Karen from "../../image/Karen.png"
import Fernanda from "../../image/Fernanda.png"
import Emily from "../../image/Emily.png"
//'

export default function QuemSomos(){

  

  return(
    
    <main className="flex-grow p-2 mt-2">
      <h1 className="text-center font-bold text-5xl gap-2">Quem Somos</h1>
      <article className="text-justify text-2xl mt-16">
        <p className="leading-10 indent-11">Somos três alunas dedicadas do curso de Análise e Desenvolvimento de Sistemas, 
          estamos desenvolvendo um projeto inovador de tecnologia aplicada na área de energia renovável.
          Formamos um grupo empenhado em criar uma solução de software focada em promover a geração e distribuição de energia limpa por meio de uma rede de pequenas centrais de energia renovável em comunidades. Cada uma traz uma combinação única de habilidades em programação, design e gerenciamento de projetos, colaborando para transformar ideias em soluções tecnológicas concretas. 
          O projeto reflete o nosso compromisso com inovação e excelência no desenvolvimento de software.</p>
      </article>

      <section className="grid grid-cols-3 justify-evenly p-4 mt-4">
        
        
        <div>
          <Image src={Fernanda} alt="Fernanda"></Image>
            <div className="text-center text-xl">
              <p><b>Turma: 1TDSPI</b></p>
              <p>Fernanda Budniak de Seda</p>
              <p>RM - 558274</p>
            </div>
        </div>

        <div>
          <Image src={Karen} alt="Karen"></Image>
            <div className="text-center text-xl">
              <p><b>Turma: 1TDSPI</b></p>
              <p>Karen Marques dos Santos</p>
              <p>RM - 554556</p>
            </div>
        </div>
        
        <div>
          <Image src={Emily} alt="Emily"></Image>
            <div className="text-center text-xl">
              <p><b>Turma: 1TDSPG</b></p>
              <p>Emily Maria de Oliveira Macedo</p>
              <p>RM - 554882</p>
            </div>
        </div>
        
        

      </section>
    </main>
  )
}