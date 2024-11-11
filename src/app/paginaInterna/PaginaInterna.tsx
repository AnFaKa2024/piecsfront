// essa será a página inicial interna - APENAS para quem tem login e senha
// aqui terão informativos sobre as emissões locais e mundiais
// tralhos cinetíficos e etc..


export default function Dashboard(){
  
  
  return(
   
    
      <section className="bg-amber-50 py-8 px-4">
        <h2 className="text-deep-green text-xl font-semibold mb-4">Métricas de Energia</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-light-gray rounded shadow">
              <h3 className="text-accent-blue font-medium">Consumo Atual</h3>
              <p className="text-deep-green text-3xl">120 kWh</p>
            </div>
          <div className="p-4 bg-light-gray rounded shadow">
            <h3 className="text-accent-blue font-medium">Energia Gerada</h3>
            <p className="text-deep-green text-3xl">200 kWh</p>
          </div>
          <div className="p-4 bg-light-gray rounded shadow">
            <h3 className="text-accent-blue font-medium">Emissões Evitadas</h3>
            <p className="text-deep-green text-3xl">50 kg CO₂</p>
          </div>
          </div>


    
    </section>
    
  )
}