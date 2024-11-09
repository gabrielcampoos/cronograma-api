import { NextFunction, Request, Response } from "express";
import { httpHelper, jwt, Result } from "../utils";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { token } = req.headers;

  if (!token) {
    return httpHelper.badRequestError(
      res,
      Result.error(401, "Token inválido.")
    );
  }

  try {
    const user = jwt.decoded(token as string);
    req.user = user;
    return next();
  } catch (erro: any) {
    return httpHelper.badRequestError(res, Result.error(401, erro.toString()));
  }
};
