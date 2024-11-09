import { Result, ResultDto } from "../../../shared/utils";
import { TimeRepository } from "../repository";

export class ListTimeUsecase {
  async execute(): Promise<ResultDto> {
    const timeRepository = new TimeRepository();

    const listTimeFromDB = await timeRepository.listTime();

    const listTime = listTimeFromDB.map((time) => time.toJson());

    return Result.success(200, "Tempos listados com sucesso.", listTime);
  }
}
