"use client"

import CabecalhoInicial from "@/components/CabecalhoInicial"
import PaginaExterna from "./Home/PaginaExterna"
import Detalhes from "./Home/Detalhes"



export default function PrimeiroAcesso(){
  return(

    <main className="grow flex flex-col gap-10 justify-center items-center">
   
      
    <CabecalhoInicial/>
    <PaginaExterna/>
    <Detalhes/>
     
    </main>
  )
}
