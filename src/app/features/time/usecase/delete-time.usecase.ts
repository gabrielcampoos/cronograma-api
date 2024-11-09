import { Result, ResultDto } from "../../../shared/utils";
import { TimeRepository } from "../repository";

export class DeleteTimeUsecase {
  async execute(id: string): Promise<ResultDto> {
    const timeRepository = new TimeRepository();

    const timeExists = await timeRepository.getById(id);

    if (!timeExists) return Result.error(400, "Tempo não encontrado.");

    try {
      await timeRepository.deleteTime(id);
    } catch (error) {
      return Result.error(400, "Tempo não pode ser excluído.");
    }

    return Result.success(200, "Tempo excluído com sucesso.", id);
  }
}
