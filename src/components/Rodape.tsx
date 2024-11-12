export default function Rodape(){

  return(

    <footer className="bg-light-gray p-4">
      <div className="max-w-7xl mx-auto text-center text-medium-gray">
        <p>&copy; {new Date().getFullYear()} PIECS. Todos os direitos reservados.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <p><strong>Muitas são as aflições dos justos, mas o Senhor de todas o livra. Sl 34.19</strong></p>
          <a href="#" className="text-deep-green">Facebook</a>
          <a href="#" className="text-deep-green">Twitter</a>
          <a href="#" className="text-deep-green">LinkedIn</a>
        </div>
      </div>
    </footer>

  )
}

//  {/* Rodapé */}
//  <footer className="bg-green-700 text-white p-4 text-center">
//  <p>&copy; 2023 Energia Renovável - Todos os direitos reservados.</p>
//  <p>Contato: contato@energia-renovavel.com.br | (XX) XXXX-XXXX</p>
// </footer>