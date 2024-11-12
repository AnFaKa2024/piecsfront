// // trazer as informações quanto CO2 deixou de emitir 
// // quadro com essas informações e mostrar o valor em R$ para venda

// import { useEffect, useState } from 'react'

// export default function VendaCarbo(){

//   const VendaCredito = () => {
//     const [carbonoRecuperado, setCarbonoRecuperado] = useState(0)
//     const [valorAtual, setValorAtual] = useState(0)
  
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response = await fetch('/api/credito-carbono')
//           const data = await response.json()
//           setCarbonoRecuperado(data.carbonoRecuperado)
//           setValorAtual(data.valorAtual)
//         } catch (error) {
//           console.error('Erro ao buscar dados do crédito de carbono:', error)
//         }
//       }
//       fetchData()
//     }, [])
//   }

//   return(
    
//     <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
//       <h1 className="text-3xl font-bold mb-8">Venda de Crédito de Carbono</h1>

//       <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6 text-center">
//         <h2 className="text-xl font-semibold mb-4">Carbono Recuperado</h2>
//         <p className="text-2xl text-green-600 font-bold">{carbonoRecuperado} kg</p>

//         <h2 className="text-xl font-semibold mt-8 mb-4">Valor Atual do Crédito</h2>
//         <p className="text-2xl text-blue-600 font-bold">R$ {valorAtual.toFixed(2)}</p>

//         <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
//           Vender Crédito
//         </button>
//       </div>
//     </div>   
//   )
// }