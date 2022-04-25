import { Router } from "express";
import * as teacherController from '../controllers/teacherController.js' 
import { validateTokenMiddleware } from "../middlewares/validateTokenMiddleware";


const teacherRouter = Router();

teacherRouter.get("/get-teacher", validateTokenMiddleware, teacherController.getByTeacher );

export default teacherRouter;
