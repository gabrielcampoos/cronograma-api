import { Request, Response } from "express";
import { httpHelper } from "../../../shared/utils";
import { Result } from "../../../shared/utils/result.helper";
import { CreateDisciplineDto, UpdateDisciplineDto } from "../dto";
import {
  CreateDisciplineUsecase,
  DeleteDisciplineUsecase,
  EditDisciplineUsecase,
  GetDisciplineByIdUsecase,
  ListDisciplineUsecase,
} from "../usecase";

export class DisciplineController {
  public static async createDiscipline(req: Request, res: Response) {
    const data: CreateDisciplineDto = req.body;

    try {
      const usecase = new CreateDisciplineUsecase();
      const result = await usecase.execute(data);

      if (!result.success) return httpHelper.badRequestError(res, result);

      return httpHelper.success(res, result);
    } catch (error: any) {
      return httpHelper.badRequestError(
        res,
        Result.error(500, error.toString())
      );
    }
  }

  public static async listDiscipline(req: Request, res: Response) {
    try {
      const usecase = new ListDisciplineUsecase();
      const result = await usecase.execute();

      return httpHelper.success(res, result);
    } catch (error: any) {
      return httpHelper.badRequestError(
        res,
        Result.error(500, error.toString())
      );
    }
  }

  public static async editDiscipline(req: Request, res: Response) {
    const { id } = req.params;
    const { name, instructor, patent }: UpdateDisciplineDto = req.body;

    try {
      const usecase = new EditDisciplineUsecase();
      const result = await usecase.execute({
        id,
        newData: {
          name: name,
          instructor: instructor,
          patent: patent,
        },
      });

      if (!result.success) return httpHelper.badRequestError(res, result);

      return httpHelper.success(res, result);
    } catch (error: any) {
      return httpHelper.badRequestError(
        res,
        Result.error(500, error.toString())
      );
    }
  }

  public static async deleteDiscipline(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const usecase = new DeleteDisciplineUsecase();
      const result = await usecase.execute(id);

      if (!result.success) return httpHelper.badRequestError(res, result);

      return httpHelper.success(res, result);
    } catch (error: any) {
      return httpHelper.badRequestError(
        res,
        Result.error(500, error.toString())
      );
    }
  }

  public static async getDisciplineById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const usecase = new GetDisciplineByIdUsecase();
      const result = await usecase.execute(id);

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
