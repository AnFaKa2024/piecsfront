import { useAuth } from "@/context"
import { FormEvent, useState } from "react"
import { FaUser, FaLock } from "react-icons/fa"
import { FiLogIn, FiLogOut } from 'react-icons/fi'
import Image from "next/image"
import log from '../../image/login.jpg'

export default function Acesso() {
  const { user, login, logout } = useAuth();

  const [dados, setDados] = useState({ nome: '', senha: '', tipo: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDados({ ...dados, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Verifique o tipo de usuário antes de logar
    if (dados.tipo) {
      login(dados);
      setDados({ nome: '', senha: '', tipo: '' });
    } else {
      alert("Por favor, selecione o tipo de usuário.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-10 bg-gray-100 ">
     
     <Image src={log} alt="login" className="w-3/6"></Image>

      <h1 className="text-3xl font-black mt-14 mb-24 text-indigo-900">Acesso PIECS</h1>
      <form className="w-96 border border-indigo-950 p-6 bg-white rounded-lg shadow-md" onSubmit={handleSubmit}>
        <div className="py-2">
          <div className="flex items-center border-2 border-gray-400 p-2 rounded-md">
            <FaUser className="text-gray-500 mr-2" />
            <input className="w-full focus:outline-none" type="text" placeholder="Usuário" name="nome" value={dados.nome} onChange={handleChange}/>
          </div>
        </div>

        <div className="py-2">
          <div className="flex items-center border-2 border-gray-400 p-2 rounded-md">
            <FaLock className="text-gray-500 mr-2" />
            <input className="w-full focus:outline-none" type="password" placeholder="Senha" name="senha" value={dados.senha} onChange={handleChange}/>
          </div>
        </div>

        <div className="py-2">
          <select className="border-2 border-gray-400 p-2 w-full rounded-md" name="tipo" value={dados.tipo} onChange={handleChange}>
            <option value="">Selecione o tipo de usuário</option>
            <option value="RESPONSÁVEL">Responsável</option>
            <option value="BENEFICIÁRIO">Beneficiário</option>
          </select>
        </div>

        <button type="submit" className="w-full mt-6 p-2 bg-indigo-900 text-white font-semibold rounded-md flex items-center justify-center">
          <FiLogIn className="mr-2" /> Acessar </button>
        
        {user && user.nome && (
          <button type="button" onClick={logout} className="w-full mt-4 p-2 bg-red-600 text-white font-semibold rounded-md flex items-center justify-center">
            <FiLogOut className="mr-2" /> Sair </button>)}

      </form>

    </div>
  )
}
