import { Router } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { prismaClient } from "../../../lib/prisma/prismaClient";

const loginRouter = Router();

// Rota para login
loginRouter.post("/login", async (req, res) => {

  const { username, password } = req.body;
  const user = await prismaClient.user.findUnique({ where: { username } });

  if (!user) {
    return res.status(401).json({ error: "Nome de usuário ou senha incorretos" });
  }

  // Verificar se a senha está correta
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ error: "Nome de usuário ou senha incorretos" });
  }

  // Autenticação do usuário, você precisará de lógica para validar as credenciais do usuário
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    throw new Error("JWT secret is not defined.");
  }

  // Suponha que o login seja bem-sucedido e você tenha o usuário autenticado
  const token = jwt.sign({ user: { id: user.id, username: user.username } }, jwtSecret, { expiresIn: "1h" });

  // Retornar o token como resposta
  res.json({ token });
});

export { loginRouter };