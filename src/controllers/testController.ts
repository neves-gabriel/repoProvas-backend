import { Request, Response } from "express";
import testService from "../services/testService.js";

export async function updateViewCount(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  await testService.updateViewCount(id);

  res.sendStatus(204);
}
