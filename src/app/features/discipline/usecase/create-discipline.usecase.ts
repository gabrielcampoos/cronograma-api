import { Result, ResultDto } from "../../../shared/utils";
import { CreateDisciplineDto } from "../dto";
import { DisciplineRepository } from "../repository";

export class CreateDisciplineUsecase {
  async execute(data: CreateDisciplineDto): Promise<ResultDto> {
    const disciplineRepository = new DisciplineRepository();

    const discipline = await disciplineRepository.createDiscipline(data);

    return Result.success(
      201,
      "Discipline successfully created.",
      discipline.toJson()
    );
  }
}
