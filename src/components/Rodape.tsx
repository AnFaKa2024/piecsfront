export default function Rodape(){

  return(

    <footer className="bg-light-gray p-4">
      <div className="max-w-7xl mx-auto text-center text-medium-gray">
        <p>&copy; {new Date().getFullYear()} PIECS. Todos os direitos reservados.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-deep-green">Facebook</a>
          <a href="#" className="text-deep-green">Twitter</a>
          <a href="#" className="text-deep-green">LinkedIn</a>
        </div>
      </div>
    </footer>

  )
}