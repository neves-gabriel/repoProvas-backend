import { Router } from "express";
import * as disciplineController from "../controllers/disciplineController.js";
import { ensureAuthenticationMiddleware } from "../middlewares/ensureAuthenticationMiddleware.js";

const disciplineRouter = Router();

disciplineRouter.get(
  "/disciplines",
  ensureAuthenticationMiddleware,
  disciplineController.get
);

export default disciplineRouter;
