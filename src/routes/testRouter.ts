import { Router } from "express";
import * as testController from "../controllers/testController.js";
import { ensureAuthenticationMiddleware } from "../middlewares/ensureAuthenticationMiddleware.js";

const testRouter = Router();
testRouter.put("/test/:id", testController.updateViewCount);

export default testRouter;
