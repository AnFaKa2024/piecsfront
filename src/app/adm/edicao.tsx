import { useState, useEffect } from "react";
import { BeneficiarioProps, LocacaoProps } from "@/types";
import { v4 as uuidv4 } from "uuid"
import { AiOutlinePlusCircle, AiOutlineDelete, AiOutlineSave } from "react-icons/ai";



export default function Edicao() {

  const locacoes: LocacaoProps[] = [
    {id: uuidv4(), plano: "F-Básico", responsavel: "Mário Lima" },
      ];
  const beneficiario: BeneficiarioProps[] = [
    {id: uuidv4(), nome: "Joana Lima", email: "Joana@gmail.com"}
  ];

  const [locacoesState, setLocacoes] = useState(locacoes);
  const [beneficiariosState, setBeneficiarios] = useState(beneficiario);

  useEffect(() => {
    const fetchBeneficiarios = async () => {
      const response = await fetch("/api/beneficiarios");
      if (response.ok) {
        const data = await response.json();
        setBeneficiarios(data);
      } else {
        console.error("Erro ao buscar beneficiários");
      }
    };

    fetchBeneficiarios();
  }, []);

  // ADICIONANDO/ EDITANDO BENEFICIÁRIO
  const adicionarBeneficiario = async () => {
    const novoBeneficiario = { id: uuidv4(), nome: "", email: "" };
    const response = await fetch("/api/beneficiarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoBeneficiario),
    });
    if (response.ok) {
      setBeneficiarios([...beneficiariosState, novoBeneficiario]);
    }
  };
  

  const editarBeneficiario = (id: string, campo:string, valor:string) => {
    if (campo === "email" && !/\S+@\S+\.\S+/.test(valor)) {
        console.error("E-mail inválido");
        return;
    }
    setBeneficiarios(
      beneficiariosState.map((beneficiario) =>
        beneficiario.id === id ? { ...beneficiario, [campo]: valor } : beneficiario
      )
    )
  }

  const excluirBeneficiario = async (id:string) => {
    try {
      const res = await fetch(`/api/adm?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setBeneficiarios((prev) => prev.filter((b) => b.id !== id));
      } else {
        const { message } = await res.json();
        console.error("Erro ao excluir beneficiário:", message);
      }
    } catch (error) {
      console.error("Erro na requisição DELETE:", error);
    }
  }

  const excluirLocacao = (id:string) => {
    setLocacoes(locacoesState.filter((locacao) => locacao.id !== id));
  }

  const salvarBeneficiarios = () => {
    console.log("Beneficiários salvos:", beneficiariosState)
  }

  return (
    <main className="bg-primaria text-gray-800 min-h-screen px-4">
      <h1 className="text-3xl font-bold mb-6 text-center mt-10">Gerenciamento de Locações e Beneficiários</h1>

      {/* Locações */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Locações</h2>
        <table className="table-auto w-full rounded-md shadow-md border border-linha">
          <thead>
            <tr className="bg-blue-50">
              <th className="border border-linha px-4 py-2">Plano</th>
              <th className="border border-linha px-4 py-2">Responsável</th>
              <th className="border border-linha px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {locacoesState.map((locacao) => (
              <tr key={locacao.id}>
                <td className="border border-linha px-4 py-2">{locacao.plano}</td>
                <td className="border border-linha px-4 py-2">{locacao.responsavel}</td>
                <td className="border border-linha px-4 py-2 text-center">
                  <button onClick={() => excluirLocacao(locacao.id)} className="text-red-500 hover:text-red-700" >
                    <AiOutlineDelete size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Beneficiários */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Beneficiários</h2>
        {beneficiariosState.map((beneficiario) => (
          <div key={beneficiario.id} className="mb-4 border p-4 rounded-md bg-white">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium">Nome</label>
                <input type="text" value={beneficiario.nome} onChange={(e) =>
                    editarBeneficiario(beneficiario.id, "nome", e.target.value) } className="border border-gray-300 rounded-md p-2 w-full"/>
              </div>
              <div>
                <label className="block font-medium">E-mail</label>
                <input type="email" value={beneficiario.email} onChange={(e) => editarBeneficiario(beneficiario.id, "email", e.target.value) } className="border border-gray-300 rounded-md p-2 w-full"/>
              </div>
            </div>
            <div className="flex justify-end mt-2">
              <button onClick={() => excluirBeneficiario(beneficiario.id)} className="text-red-500 hover:text-red-700" >
                <AiOutlineDelete size={20} />
              </button>
            </div>
          </div>
        ))}
        <button onClick={adicionarBeneficiario} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2" >
          <AiOutlinePlusCircle size={20} /> Adicionar Beneficiário
        </button>

        <button onClick={salvarBeneficiarios} className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2" >
          <AiOutlineSave size={20} /> Salvar Alterações
        </button>
      </section>
    </main>
  );
}
