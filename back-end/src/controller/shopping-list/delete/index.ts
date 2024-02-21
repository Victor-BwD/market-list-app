import handleError from "../../../helpers/handle-errors/handle.error";

import { Request, Response } from "express";
import { deleteShoppingListParser } from "./parser";
import { deleteShoppingListRepository } from "../../../repository/shopping-list/delete";

export async function deleteShoppingListController(req: Request, res: Response) {
  try{
    const params = deleteShoppingListParser(req);
    await deleteShoppingListRepository(params);
    

    return res.status(200).send("Lista deletada com sucesso!");
  }catch(error){
    handleError(error as Error, res);
  }
}