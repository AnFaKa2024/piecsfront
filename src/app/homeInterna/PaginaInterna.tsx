// essa será a página inicial interna - APENAS para quem tem login e senha
// aqui terão informativos sobre as emissões locais e mundiais

import Image from "next/image"
import consumo from '../../image/consumo.png'
import gerada from '../../image/gerada.png'
import evitada from '../../image/evitada.png'



export default function PaginaInterna(){
  
  
  return(
   
    
      <section className="bg-primaria py-8 px-4">
        <h2 className="text-padrao text-center text-3xl font-semibold mb-4">Métricas de Energia</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-4 bg-linha hover:bg-yellow-600 rounded-md shadow text-center">
                <h3 className="text-claro font-semibold text-xl">Consumo Atual</h3>
                  <Image src={consumo} alt="consumo" ></Image>              
                <p className="text-claro text-3xl">120 kWh</p>
              </div>

              <div className="p-4 bg-linha hover:bg-yellow-600 rounded-md shadow text-center">
                <h3 className="text-claro font-semibold  text-xl">Energia Gerada</h3>
                  <Image src={gerada} alt="gerada" ></Image>
                <p className="text-claro text-3xl">200 kWh</p>
              </div>
            
              <div className="p-4 bg-linha hover:bg-yellow-600 rounded-md shadow text-center">
                <h3 className="text-claro font-semibold  text-xl">Emissões Evitadas</h3>
                  <Image src={evitada} alt="evitada" ></Image>
                <p className="text-claro text-3xl">50 kg CO₂</p>
              </div>
          </div>


    
    </section>
    
  )
}