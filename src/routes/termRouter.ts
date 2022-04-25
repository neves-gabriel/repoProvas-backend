import { Router } from "express";
import * as termController from "../controllers/termController.js";
import { ensureAuthenticationMiddleware } from "../middlewares/ensureAuthenticationMiddleware.js";

const termRouter = Router();

termRouter.get("/terms", ensureAuthenticationMiddleware, termController.get);

export default termRouter;
