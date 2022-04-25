import * as disciplineService from "../services/disciplineService.js";

import { Request, Response } from "express";

export async function getByDisciplines(req: Request, res: Response) {
    const data = await disciplineService.getDisciplines();
    res.send(data);
  }

  export async function getAllTests(req: Request, res: Response) {
    const data = await disciplineService.getTests();
    res.send(data);
  }

  export async function getByTerms(req: Request, res: Response) {
    const data = await disciplineService.getAllTerms();
    res.send(data);
  }

  export async function getByCategory(req: Request, res: Response) {
    const data = await disciplineService.getAllCategories();
    res.send(data);
  }