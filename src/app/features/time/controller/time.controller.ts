import { Request, Response } from "express";
import { httpHelper } from "../../../shared/utils";
import { Result } from "../../../shared/utils/result.helper";
import { CreateTimeDto, UpdateTimeDto } from "../dto";
import {
  CreateTimeUsecase,
  DeleteTimeUsecase,
  EditTimeUsecase,
  GetTimeByIdUsecase,
  ListTimeUsecase,
} from "../usecase";

export class TimeController {
  public static async createTime(req: Request, res: Response) {
    const data: CreateTimeDto = req.body;

    try {
      const usecase = new CreateTimeUsecase();
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

  public static async listTimes(req: Request, res: Response) {
    try {
      const usecase = new ListTimeUsecase();
      const result = await usecase.execute();

      return httpHelper.success(res, result);
    } catch (error: any) {
      return httpHelper.badRequestError(
        res,
        Result.error(500, error.toString())
      );
    }
  }

  public static async editTime(req: Request, res: Response) {
    const { id } = req.params;
    const { number, startTime, endTime }: UpdateTimeDto = req.body;

    try {
      const usecase = new EditTimeUsecase();
      const result = await usecase.execute({
        id,
        newData: {
          number: number,
          startTime: startTime,
          endTime: endTime,
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

  public static async deleteTime(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const usecase = new DeleteTimeUsecase();
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

  public static async getTimeById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const usecase = new GetTimeByIdUsecase();
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
