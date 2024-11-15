"use client"

import Usuario from "./usuario";
import Cabecalho from "../login/Cabecalho";

//import { UserProps } from "@/types";

export default function Responsavel(){

  // const {reponsavel} = useAuth()

   

  // if(responsavel?.nome == ""){
  //   alert("Para fazer gerenciar a microregião, faça antes o login")
  //   redirect('/')    
  // }

  return(
    <>
    <Cabecalho/>
    <Usuario/>
    </>
  )
}