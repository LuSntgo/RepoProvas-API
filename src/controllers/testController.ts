import { Request, Response } from "express";
import disciplineService from '../services/disciplineService.js'

async function find(req: Request, res: Response) {
  const { groupBy } = req.query as { groupBy: string };

  if (groupBy !== "disciplines" && groupBy !== "teachers") {
    return res.sendStatus(400);
  }

  const tests = await disciplineService.find({ groupBy });
  res.send({ tests });
}

export default {
  find,
};
