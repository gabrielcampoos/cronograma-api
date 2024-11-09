import { Result, ResultDto } from "../../../shared/utils";
import { EditDisciplineDto } from "../dto";
import { DisciplineRepository } from "../repository";

export class EditDisciplineUsecase {
  async execute(data: EditDisciplineDto): Promise<ResultDto> {
    const { id, newData } = data;

    const disciplineRepository = new DisciplineRepository();

    const existingDiscipline = await disciplineRepository.getById(id);

    if (!existingDiscipline)
      return Result.error(404, "Disciplina não encontrada.");

    const updatedDiscipline = await disciplineRepository.editDiscipline({
      id,
      name: newData.name,
      instructor: newData.instructor,
      patent: newData.patent,
    });

    if (!updatedDiscipline)
      return Result.error(400, "Não foi possível editar a disciplina.");

    return Result.success(
      200,
      "Disciplina editada com sucesso.",
      updatedDiscipline.toJson()
    );
  }
}
