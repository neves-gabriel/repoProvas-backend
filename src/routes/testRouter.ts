import { Router } from "express";
import * as testController from "../controllers/testController.js";
import { ensureAuthenticationMiddleware } from "../middlewares/ensureAuthenticationMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { testSchema } from "../schemas/testSchema.js";

const testRouter = Router();
testRouter.put("/test/:id", testController.updateViewCount);
testRouter.post(
  "/test",
  validateSchemaMiddleware(testSchema),
  testController.create
);

export default testRouter;
