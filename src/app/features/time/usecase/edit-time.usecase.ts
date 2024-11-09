import { Result, ResultDto } from "../../../shared/utils";
import { EditTimeDto } from "../dto";
import { TimeRepository } from "../repository";

export class EditTimeUsecase {
  async execute(data: EditTimeDto): Promise<ResultDto> {
    const { id, newData } = data;

    const timeRepository = new TimeRepository();

    const existingTime = await timeRepository.getById(id);

    if (!existingTime) return Result.error(404, "Tempo não encontrado.");

    const updatedTime = await timeRepository.editTime({
      id,
      number: newData.number,
      startTime: newData.startTime,
      endTime: newData.endTime,
    });

    if (!updatedTime)
      return Result.error(400, "Não foi possível editar o tempo.");

    return Result.success(
      200,
      "Tempo editado com sucesso.",
      updatedTime.toJson()
    );
  }
}
