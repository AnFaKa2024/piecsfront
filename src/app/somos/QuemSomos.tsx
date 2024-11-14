// página de apresentação dos grupo que desenvolveu o software

import { MembroEquipe } from "@/types"
import Image from "next/image"
import Karen from "../../image/Karen.png"
import Fernanda from "../../image/Fernanda.png"
import Emily from "../../image/Emily.png"




export default function QuemSomos(){
  const membros: MembroEquipe[] = [
    {
      nome: "Fernanda Budniak de Seda",
      turma: "1TDSPI",
      rm: "558274",
      foto: Fernanda,
      github: "https://github.com/Febudniak",
      linkedin: "https://www.linkedin.com/in/fernanda-budniak-de-seda-4022382b6/"
    },
    {
      nome: "Karen Marques dos Santos",
      turma: "1TDSPI",
      rm: "554556",
      foto: Karen,
      github: "https://github.com/AstorBia",
      linkedin: "https://www.linkedin.com/in/karen-marques-tech-dev"
    },
    {
      nome: "Emily Maria de Oliveira Macedo",
      turma: "1TDSPG",
      rm: "554882",
      foto: Emily,
      github: "https://github.com/Emily27289",
      linkedin: "https://www.linkedin.com/in/emily-macedo-5a9474329/"
    }
  ];

  return(
    <main className="grow text-padrao p-4 md:p-8">
      <h1 className="text-center font-bold text-3xl md:text-5xl gap-2">Quem Somos</h1>
      
      <article className="text-justify text-lg md:text-2xl mt-8 md:mt-16">
        <p className="leading-8 md:leading-10 indent-8 md:indent-11">Somos três alunas dedicadas do curso de Análise e Desenvolvimento de Sistemas, 
          estamos desenvolvendo um projeto inovador de tecnologia aplicada na área de energia renovável.
          Formamos um grupo empenhado em criar uma solução de software focada em promover a geração e distribuição de energia limpa por meio de uma rede de pequenas centrais de energia renovável em comunidades. Cada uma traz uma combinação única de habilidades em programação, design e gerenciamento de projetos, colaborando para transformar ideias em soluções tecnológicas concretas. 
          O projeto reflete o nosso compromisso com inovação e excelência no desenvolvimento de software.</p>
      </article>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2 md:p-4 mt-4">
        {membros.map((membro, index) => (
          <MembroCard key={index} {...membro} />
        ))}
      </section>
    </main>
  )
}

function MembroCard({ nome, turma, rm, foto, github, linkedin }: MembroEquipe) {
  return (
    <div className="p-4 md:p-6 w-full max-w-sm mx-auto border border-linha rounded-xl shadow-md space-y-3 md:space-y-4">
      <div className="text-center">
        <Image src={foto} alt={nome}className="w-32 md:w-auto"/>
      </div>

      <div className="text-center text-base md:text-xl">
        <p><b>Turma: {turma}</b></p>
        <h2 className="text-lg md:text-xl font-semibold">{nome}</h2>
        <p>RM - {rm}</p>
      </div>

      <div className="bg-claro hover:bg-white p-3 md:p-4 border border-linha rounded-lg text-center space-y-2">
        <h3 className="font-medium">Contatos e Trabalhos Realizados</h3>
        <div className="text-sm md:text-base overflow-hidden">
          <p className="truncate hover:text-clip">GitHub: {github}</p>
          <p className="truncate hover:text-clip">Linkedin: {linkedin}</p>
        </div>
      </div>
    </div>
  );
}