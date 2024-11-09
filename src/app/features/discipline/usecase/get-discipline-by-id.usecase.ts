import { Result, ResultDto } from "../../../shared/utils";
import { DisciplineRepository } from "../repository";

export class GetDisciplineByIdUsecase {
  async execute(id: string): Promise<ResultDto> {
    const disciplineRepository = new DisciplineRepository();

    const disciplineExistis = await disciplineRepository.getById(id);

    if (!disciplineExistis)
      return Result.error(400, "Disciplina não encontrada.");

    return Result.success(
      200,
      "Disciplina encontrada.",
      disciplineExistis.toJson()
    );
  }
}
