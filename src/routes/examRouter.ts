import { Router } from "express";
import * as disciplineController from '../controllers/disciplineController.js'
import { validateTokenMiddleware } from "../middlewares/validateTokenMiddleware.js";


const examRouter = Router();

examRouter.get("/exams", validateTokenMiddleware, disciplineController.getByDisciplines);
examRouter.get("/exams-terms", disciplineController.getByTerms);
examRouter.get("/exams-category", disciplineController.getByCategory);
examRouter.get("/exams-all", disciplineController.getAllTests);

export default examRouter;
