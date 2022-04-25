import { Router } from "express";
import examRouter from "./examRouter.js";
import teacherRouter from "./teacherRouter.js";
import userRouter from "./userRouter.js";

const router = Router();

router.use(userRouter)
router.use(examRouter)
router.use(teacherRouter)


export default router;