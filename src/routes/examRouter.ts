import { Router } from "express";
import * as disciplineController from '../controllers/disciplineController.js'
import { validateTokenMiddleware } from "../middlewares/validateTokenMiddleware.js";


const examRouter = Router();

examRouter.get("/get-exam"), validateTokenMiddleware, disciplineController.getByDisciplines;

export default examRouter;
