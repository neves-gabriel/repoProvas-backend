import { Router } from "express";
import categoryRouter from "./categoryRouter.js";
import teacherRouter from "./teacherRouter.js";
import termRouter from "./termRouter.js";
import userRouter from "./userRouter.js";

const router = Router();

router.get("/health", async (req, res) => {
  res.sendStatus(200);
});

router.use(userRouter);
router.use(termRouter);
router.use(teacherRouter);
router.use(categoryRouter);

export default router;
