import { Request, Response } from "express";
import { httpHelper } from "../../../shared/utils";
import { Result } from "../../../shared/utils/result.helper";
import { CreateUserDto, LoginUserDto } from "../dto";
import { CreateUserUsecase, LoginUserUsecase } from "../usecase";

export class UsersController {
  public static async createUser(req: Request, res: Response) {
    const user: CreateUserDto = req.body;

    try {
      const usecase = new CreateUserUsecase();

      const result = await usecase.execute(user);

      if (!result.success) return httpHelper.badRequestError(res, result);

      return httpHelper.success(res, result);
    } catch (error: any) {
      return httpHelper.badRequestError(
        res,
        Result.error(500, error.toString())
      );
    }
  }

  public static async loginUser(req: Request, res: Response) {
    const { username, password }: LoginUserDto = req.body;

    try {
      const usecase = new LoginUserUsecase();

      const result = await usecase.execute({ username, password });

      if (!result.success) return httpHelper.badRequestError(res, result);

      return httpHelper.success(res, result);
    } catch (error: any) {
      return httpHelper.badRequestError(
        res,
        Result.error(500, error.toString())
      );
    }
  }
}
