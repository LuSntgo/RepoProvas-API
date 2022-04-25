import { Request, Response } from "express";
import * as teacherService from "../services/teacherService.js";

export async function getByTeacher(req: Request, res: Response) {
  const data = await teacherService.getTeachers();
  res.send(data);
}
