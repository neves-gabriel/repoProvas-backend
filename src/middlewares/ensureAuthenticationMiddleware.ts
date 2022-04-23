import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import userService from "../services/userService.js";

export async function ensureAuthenticationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization = req.headers["authorization"] as string;
  if (!authorization) throw { type: "unauthorized" };

  const token = authorization.replace("Bearer ", "");
  if (!token) throw { type: "unauthorized" };

  const { id } = jwt.verify(token, process.env.JWT_SECRET || "{}") as {
    id: number;
  };
  const user = await userService.findById(id);
  res.locals.user = user;

  next();
}
