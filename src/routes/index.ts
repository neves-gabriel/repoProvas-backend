import { Router } from "express";
import termRouter from "./termRouter.js";
import userRouter from "./userRouter.js";

const router = Router();

router.use(userRouter);
router.use(termRouter);

export default router;
