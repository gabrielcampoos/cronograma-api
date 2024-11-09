import { Result, ResultDto } from "../../../shared/utils";
import { CreateTimeDto } from "../dto";
import { TimeRepository } from "../repository";

export class CreateTimeUsecase {
  async execute(data: CreateTimeDto): Promise<ResultDto> {
    const timeRepository = new TimeRepository();

    const time = await timeRepository.createTime(data);

    return Result.success(201, "Time successfully created.", time.toJson());
  }
}
