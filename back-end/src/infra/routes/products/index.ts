import { Router } from "express";
import { productUrls } from "./urls";
import { CreateProductController } from "../../../controller/product/create";
import { deleteProductController } from "../../../controller/product/delete";
import { auth } from "../../../middlewares/authMiddleware";

const productRouter = Router();

productRouter.post(productUrls.main, auth,  CreateProductController);
productRouter.delete(productUrls.main + "/:id", auth, deleteProductController);

export { productRouter };