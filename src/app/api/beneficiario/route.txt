// import {promises as fs} from "fs"
// import { BeneficiarioProps } from "@/types"
// import { NextResponse } from "next/server"


// export async function GET(request:Request, {params}:{params:{id:number}}){
  
//   const file = await fs.readFile(process.cwd() + '/src/data/beneficiario.json', 'utf-8')
//   const beneficiarios:BeneficiarioProps[] = JSON.parse(file)

//   const beneficiario = beneficiarios.find(p => p.id == params.id)

//   return NextResponse.json(beneficiario)

// }

// export default function POST(request:Request, {params}:{params:{id:number}}){

//   const file = await fs.readFile(process.cwd() + '/src/data/beneficiario', 'utf-8')
//   const data = JSON.parse(file)
//   const {nome, email} = await request.json()
//   const beneficiario = {nome, email} as BeneficiarioProps
//   beneficiario.id = Number(Date.now())
//   data.push(beneficiario)
//   const json = JSON.stringify(data)
//   await fs.writeFile(process.cwd() + '/src/data/beneficiario', json)

//   return NextResponse.json(beneficiario)
// }