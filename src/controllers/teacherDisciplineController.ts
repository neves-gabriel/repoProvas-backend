import { Request, Response } from "express";
import teacherDisciplineService from "../services/teacherDisciplineService.js";

export async function get(req: Request, res: Response) {
  const teachersDisciplines = await teacherDisciplineService.findAll();
  res.send({ teachersDisciplines });
}
