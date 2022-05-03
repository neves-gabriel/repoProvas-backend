import { Router } from "express";
import categoryRouter from "./categoryRouter.js";
import disciplineRouter from "./disciplineRouter.js";
import teacherDisciplineRouter from "./teacherDisciplineRouter.js";
import teacherRouter from "./teacherRouter.js";
import termRouter from "./termRouter.js";
import testRouter from "./testRouter.js";
import userRouter from "./userRouter.js";

const router = Router();

router.get("/health", async (req, res) => {
  res.sendStatus(200);
});

router.use(userRouter);
router.use(termRouter);
router.use(teacherRouter);
router.use(categoryRouter);
router.use(testRouter);
router.use(teacherDisciplineRouter);
router.use(disciplineRouter);

export default router;
