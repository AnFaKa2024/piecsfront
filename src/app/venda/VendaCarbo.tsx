// trazer as informações quanto CO2 deixou de emitir 
// quadro com essas informações e mostrar o valor em R$ para venda


export default function VendaCarbo(){

  return(
    
    
        <section className="bg-medium-gray py-8 px-4">
          <h2 className="text-deep-green text-xl font-semibold mb-4">Marketplace de Energia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-white rounded shadow">
              <h3 className="text-accent-blue font-medium">Venda de Energia</h3>
              <p className="text-green-900">200 kWh disponíveis</p>
              <button className="mt-2 px-4 py-2 bg-deep-green text-white rounded">Comprar</button>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h3 className="text-blue-950 font-medium">Compra de Energia</h3>
              <p className="text-green-950">150 kWh solicitados</p>
              <button className="mt-2 px-4 py-2 bg-greentext-green-950 text-white rounded">Vender</button>
            </div>
          </div>
        </section>
    
    
      
  )
}