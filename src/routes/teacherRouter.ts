import { Router } from "express";
import * as teacherController from "../controllers/teacherController.js";
import { ensureAuthenticationMiddleware } from "../middlewares/ensureAuthenticationMiddleware.js";

const teacherRouter = Router();

teacherRouter.get(
  "/teachers",
  ensureAuthenticationMiddleware,
  teacherController.get
);

export default teacherRouter;
