let beneficiarios = [
  { id: "1", nome: "Joana Lima", email: "Joana@gmail.com" },
  { id: "2", nome: "Carlos Silva", email: "Carlos@gmail.com" },
]

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(beneficiarios);
  } 
    else if (req.method === "POST") {
    const novoBeneficiario = req.body;
    beneficiarios.push(novoBeneficiario);
    res.status(201).json({ message: "Beneficiário adicionado", data: novoBeneficiario });
  } 
    else if (req.method === "DELETE") {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ message: "ID do beneficiário é obrigatório" });
    }

    const index = beneficiarios.findIndex((b) => b.id === id);

    if (index === -1) {
      return res.status(404).json({ message: "Beneficiário não encontrado" });
    }

    beneficiarios.splice(index, 1);
    res.status(200).json({ message: "Beneficiário removido com sucesso", id });
  } else {
    res.status(405).json({ message: "Método não permitido" });
  }
}
