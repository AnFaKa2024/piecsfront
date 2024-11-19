export default function handler(req, res) {
  if (req.method === "POST") {
    const { nome, senha, tipo } = req.body;

    if (!nome || !senha || !tipo) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios." });
    }

    // Simulação de validação de login
    if (tipo === "RESPONSÁVEL") {
      return res.status(200).json({
        message: "Login bem-sucedido!",
        user: { nome, tipo, redirectTo: "/responsavel" },
      });
    }

    if (tipo === "BENEFICIÁRIO") {
      return res.status(200).json({
        message: "Login bem-sucedido!",
        user: { nome, tipo, redirectTo: "/beneficiario" },
      });
    }

    return res.status(401).json({ error: "Tipo de usuário inválido." });
  }

  res.setHeader("Allow", ["POST"]);
  return res.status(405).json({ error: "Método não permitido." });
}
























// export default async function handler(req, res) {
//   try {
//     const response = await fetch('URL_DA_API_JAVA'); // Substitua pela URL da API
//     const data = await response.json();
//     res.status(200).json(data);
//   } catch (error) {
//     console.error('Erro ao comunicar com a API Java:', error);
//     res.status(500).json({ error: 'Erro ao obter dados' });
//   }
// }



// export default async function handler(req, res) {
//   try {
//     const response = await fetch('URL_DA_API_JAVA'); // Substitua pela URL correta da API Java
//     const data = await response.json();
//     res.status(200).json({
//       carbonoRecuperado: data.carbonoRecuperado,
//       valorAtual: data.valorAtual,
//     });
//   } catch (error) {
//     console.error('Erro ao comunicar com a API Java:', error);
//     res.status(500).json({ error: 'Erro ao obter dados' });
//   }
// }
