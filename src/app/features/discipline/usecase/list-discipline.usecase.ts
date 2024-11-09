import { Result, ResultDto } from "../../../shared/utils";
import { DisciplineRepository } from "../repository";

export class ListDisciplineUsecase {
  async execute(): Promise<ResultDto> {
    const disciplineRepository = new DisciplineRepository();

    const listDisciplineFromDB = await disciplineRepository.listDiscipline();

    const listDiscipline = listDisciplineFromDB.map((discipline) =>
      discipline.toJson()
    );

    return Result.success(
      200,
      "Disciplinas listadas com sucesso.",
      listDiscipline
    );
  }
}
