import { Router } from "express";
import { createUserController } from "../../../controller/user/create";
import { userUrls } from "./urls";

const userRouter = Router();

userRouter.post(userUrls.main, createUserController);

export { userRouter };