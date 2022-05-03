import { Router } from "express";
import * as teacherDisciplineController from "../controllers/teacherDisciplineController.js";
import { ensureAuthenticationMiddleware } from "../middlewares/ensureAuthenticationMiddleware.js";

const teacherDisciplineRouter = Router();

teacherDisciplineRouter.get(
  "/teachersdisciplines",
  ensureAuthenticationMiddleware,
  teacherDisciplineController.get
);

export default teacherDisciplineRouter;
