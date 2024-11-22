// "use client"

// import { BeneficiarioProps } from "@/types"
// import { useEffect, useState } from "react"


// export default function Beneficiario({params}:{params:{id:number}}){

//   const [beneficiario, setBeneficiario] = useState<BeneficiarioProps>()

//   useEffect(()=>{
//     const chamadaAPI = async ()=>{
//       const response = await fetch (`http://localhost:3000/api/beneficiario/${params.id}`)
//       const data = await response.json()
//       setBeneficiario(data)
//       console.log(data)
//     }
//     chamadaAPI
//   })

//   return(
//     <main className="grow p-5">
//       <h1>Lista de Beneficiarios</h1>
//       <div>
//         <p>Id: {beneficiario?.id}</p>
//         <p>Nome: {beneficiario?.nome}</p>
//         <p>Email: {beneficiario?.email}</p>
//       </div>
//     </main>
//   )
// }

