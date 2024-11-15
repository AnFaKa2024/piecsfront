"use client"

import CabecalhoInicial from "@/components/CabecalhoInicial"
import Assinaturas from "./Assinaturas"
import Carrossel from "./carrossel"
import Orcamento from "./orcamento"

export default function Planos(){
  const handleSubmit = () => {
  }

  const isChatbotOpen = true; 

  return(
    <>
    <CabecalhoInicial/>
    <Assinaturas/>
    <Carrossel/>
    <Orcamento onSubmit={handleSubmit} chatbotOpen={isChatbotOpen}/>
    </>
  )
}