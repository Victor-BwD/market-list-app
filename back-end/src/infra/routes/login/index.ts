import { Router } from "express";
import jwt from "jsonwebtoken";

const loginRouter = Router();


// Rota para login
loginRouter.post("/login", (req, res) => {
  // Autenticação do usuário, você precisará de lógica para validar as credenciais do usuário
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    throw new Error("JWT secret is not defined.");
  }

  // Suponha que o login seja bem-sucedido e você tenha o usuário autenticado
  const user = {
    id: 1,
    username: "usuário",
    // outros dados do usuário...
  };

  // Gerar um token JWT
  const token = jwt.sign({ user }, jwtSecret, { expiresIn: "1h" });

  // Retornar o token como resposta
  res.json({ token });
});

export { loginRouter };