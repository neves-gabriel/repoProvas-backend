import { Request, Response } from "express";
import disciplineService from "../services/disciplineService.js";

export async function get(req: Request, res: Response) {
  const disciplines = await disciplineService.findAll();
  res.send({ disciplines });
}
