import { Router } from "express";
import * as userController from "../controllers/userController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { userSchema } from "../schemas/userSchema.js";

const userRouter = Router();
userRouter.post(
  "/sign-up",
  validateSchemaMiddleware(userSchema),
  userController.create
);
userRouter.post(
  "/sign-in",
  validateSchemaMiddleware(userSchema),
  userController.login
);

export default userRouter;
