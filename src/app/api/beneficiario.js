export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json([
      { id: "1", nome: "Joana Lima", email: "Joana@gmail.com" },
      { id: "2", nome: "Carlos Silva", email: "Carlos@gmail.com" }
    ]);
  } 
  
    else if (req.method === "POST") {
    const novoBeneficiario = req.body;
    res.status(201).json({ message: "Beneficiário adicionado", data: novoBeneficiario });
  } else {
    res.status(405).json({ message: "Método não permitido" });
  }
}
