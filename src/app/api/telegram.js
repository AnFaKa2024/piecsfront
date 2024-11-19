export default async function handler(req, res) {
  if (req.method === "POST") {
    const { message } = req.body;

    try {
      const response = await fetch(`https://api.telegram.org/bot7018761076:AAEzcxASAAOFCeNe-OOnbN9YDiOfIdQVM0g/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: "@AstorBia_bot",
          text: message,
        }),
      });

      const data = await response.json();
      res.status(200).json({ reply: data.ok ? "Mensagem enviada com sucesso!" : "Erro ao enviar." });
    } catch (error) {
      res.status(500).json({ error: "Erro no servidor" });
    }
  } else {
    res.status(405).json({ error: "Método não permitido" });
  }
}
