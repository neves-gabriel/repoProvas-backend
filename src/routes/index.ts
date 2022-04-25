import { Router } from "express";
import teacherRouter from "./teacherRouter.js";
import termRouter from "./termRouter.js";
import userRouter from "./userRouter.js";

const router = Router();

router.use(userRouter);
router.use(termRouter);
router.use(teacherRouter);

export default router;
