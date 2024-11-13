"use client"

import Usuario from "./usuario";

import { UserProps } from "@/types";

export default function Responsavel(){

  const {reponsavel} = useAuth()

   

  if(responsavel?.nome == ""){
    alert("Para fazer gerenciar a microregião, faça antes o login")
    redirect('/')    
  }

  return(
    
    <Usuario/>
  )
}