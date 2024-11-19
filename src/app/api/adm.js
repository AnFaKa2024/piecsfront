const adicionarBeneficiario = () => {
  const novoId = beneficiarios.length + 1;
  setBeneficiarios([...beneficiarios, { id: novoId, nome: "", email: "" }]);
};

const editarBeneficiario = (id, campo, valor) => {
  setBeneficiarios(
    beneficiarios.map((b) => (b.id === id ? { ...b, [campo]: valor } : b))
  );
};

const excluirBeneficiario = (id) => {
  setBeneficiarios(beneficiarios.filter((b) => b.id !== id));
};

const excluirLocacao = (id) => {
  setLocacoes(locacoes.filter((l) => l.id !== id));
};
