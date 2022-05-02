import { Router } from "express";
import * as categoryController from "../controllers/categoryController.js";
import { ensureAuthenticationMiddleware } from "../middlewares/ensureAuthenticationMiddleware.js";

const categoryRouter = Router();

categoryRouter.get(
  "/categories",
  ensureAuthenticationMiddleware,
  categoryController.get
);

export default categoryRouter;
