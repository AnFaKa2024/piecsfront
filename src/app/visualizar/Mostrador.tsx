// // Quadro com as informações de quanto gerou de energia e quanto consumiu

// import { useEffect, useState } from 'react'
// import { Line } from 'react-chartjs-2'

// export default function Mostrador(){

//   const MercadoCarbono = () => {
//     const [emissionsData, setEmissionsData] = useState([])
//     const [energyData, setEnergyData] = useState([])

//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response = await fetch('/api/gee-data')
//           const data = await response.json()
//           setEmissionsData((prev) => [...prev, data.emissions])
//           setEnergyData((prev) => [...prev, data.energyGenerated])
//         } catch (error) {
//           console.error('Erro ao buscar dados de GEE:', error)
//         }
//       };
  
//       // mostra a cada 5 minutos
//       const intervalId = setInterval(fetchData, 5000);
//       return () => clearInterval(intervalId); 
//     }, [])
  
//     const emissionsChartData = {
//       labels: emissionsData.map((_, i) => `Minuto ${i + 1}`)
//       datasets: [
//         {
//           label: 'Emissões de GEE',
//           data: emissionsData,
//           borderColor: 'rgba(75, 192, 192, 1)',
//           fill: false,
//         }
//       ]
//     }
  
//     const energyChartData = {
//       labels: energyData.map((_, i) => `Minuto ${i + 1}`)
//       datasets: [
//         {
//           label: 'Energia Gerada',
//           data: energyData,
//           borderColor: 'rgba(255, 159, 64, 1)',
//           fill: false,
//         }
//       ]
//     }
  

//   return(
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold text-center mb-8">Mercado de Carbono</h1>

//       <div className="flex flex-col md:flex-row justify-around">
//         <div className="w-full md:w-1/2 mb-6 md:mb-0">
//           <h2 className="text-xl font-semibold text-center">Emissões de GEE</h2>
//           <Line data={emissionsChartData} />
//         </div>
//         <div className="w-full md:w-1/2">
//           <h2 className="text-xl font-semibold text-center">Energia Gerada</h2>
//           <Line data={energyChartData} />
//         </div>
//       </div>
//     </div>
//   )
// }