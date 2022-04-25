import * as disciplineService from "../services/disciplineService.js";
import { Request, Response } from "express";

export async function getByDisciplines(req: Request, res: Response) {
    const data = await disciplineService.getDisciplines();
    res.send(data);
  }