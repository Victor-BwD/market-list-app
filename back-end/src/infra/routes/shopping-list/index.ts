import { Router } from "express";
import { shoppingListUrls } from "./urls";
import { CreateShoppingListController } from "../../../controller/shopping-list/create";
import { listShoppingListController } from "../../../controller/shopping-list/list";
import { deleteShoppingListController } from "../../../controller/shopping-list/delete";
import { editShoppingListController } from "../../../controller/shopping-list/edit";
import { editFavoriteShoppingListController } from "../../../controller/shopping-list/editFavorite";
import { auth } from "../../../middlewares/authMiddleware";

const shoppingListRouter = Router();

shoppingListRouter.post(shoppingListUrls.main, auth, CreateShoppingListController);
shoppingListRouter.get(shoppingListUrls.main, auth, listShoppingListController);
shoppingListRouter.delete(shoppingListUrls.main + "/:id", auth, deleteShoppingListController);
shoppingListRouter.put(shoppingListUrls.main + "/:id", auth, editShoppingListController);
shoppingListRouter.put(shoppingListUrls.main + "/:id/favorite", auth, editFavoriteShoppingListController);

export { shoppingListRouter };