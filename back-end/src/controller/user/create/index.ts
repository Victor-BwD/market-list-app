import handleError from "../../../helpers/handle-errors/handle.error";
import { Request, Response } from "express";
import { HttpStatus } from "../../../infra/http/http.status";
import { createUserParser } from "./parser";
import { createUserRepository } from "../../../repository/user/create";


export async function createUserController(req: Request, res: Response) {
  try{
    const QueryParser = createUserParser(req);

    const createUser = await createUserRepository(QueryParser);

    return res.status(HttpStatus.OK).json(createUser);
  }catch(error){
    handleError(error as Error, res);
  }
}