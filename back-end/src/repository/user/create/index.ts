import { CreateUserPayload } from "../../../controller/user/create/parser";
import { prismaClient } from "../../../lib/prisma/prismaClient";
import bcrypt from "bcrypt";

export async function createUserRepository(payload: CreateUserPayload) {

  const hashedPassword = await bcrypt.hash(payload.password, 10);

  const user = await prismaClient.user.create({
    data: {
      username: payload.username,
      password: hashedPassword
    }
  });

  return user;
}