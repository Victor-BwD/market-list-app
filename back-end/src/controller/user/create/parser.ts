import { z } from "zod";
import { Request } from "express";


const bodyObject = z.object({
  username: z.string().min(3),
  password: z.string().min(8),
});

export function createUserParser(req: Request) {
  return bodyObject.parse(req.body);
}
export type CreateUserPayload = z.infer<typeof bodyObject>;
