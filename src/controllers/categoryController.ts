import { Request, Response } from "express";
import categoryService from "../services/categoryService.js";

export async function get(req: Request, res: Response) {
  const categories = await categoryService.findAll();
  res.send({ categories });
}
