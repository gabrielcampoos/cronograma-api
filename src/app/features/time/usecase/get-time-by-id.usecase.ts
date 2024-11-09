import { Result, ResultDto } from "../../../shared/utils";
import { TimeRepository } from "../repository";

export class GetTimeByIdUsecase {
  async execute(id: string): Promise<ResultDto> {
    const timeRepository = new TimeRepository();

    const timeExistis = await timeRepository.getById(id);

    if (!timeExistis) return Result.error(400, "Tempo não encontrado.");

    return Result.success(200, "Tempo encontrado.", timeExistis.toJson());
  }
}
