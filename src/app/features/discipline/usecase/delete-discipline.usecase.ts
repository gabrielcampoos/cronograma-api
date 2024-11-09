import { Result, ResultDto } from "../../../shared/utils";
import { DisciplineRepository } from "../repository";

export class DeleteDisciplineUsecase {
  async execute(id: string): Promise<ResultDto> {
    const disciplineRepository = new DisciplineRepository();

    const disciplineExists = await disciplineRepository.getById(id);

    if (!disciplineExists)
      return Result.error(400, "Disciplina não encontrada.");

    try {
      await disciplineRepository.deleteDiscipline(id);
    } catch (error) {
      return Result.error(400, "Disciplina não pode ser excluída.");
    }

    return Result.success(200, "Disciplina excluída com sucesso.", id);
  }
}
