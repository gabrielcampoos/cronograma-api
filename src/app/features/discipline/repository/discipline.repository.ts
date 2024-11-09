import { DatabaseConnection } from "../../../../main/database/typeorm.connection";
import { Discipline, Time } from "../../../models";
import { DisciplineEntity, TimeEntity } from "../../../shared/entities";
import { CreateDisciplineDto, UpdateDisciplineDto } from "../dto";

export class DisciplineRepository {
  private _manager = DatabaseConnection.connection.manager;

  public async createDiscipline(
    data: CreateDisciplineDto
  ): Promise<Discipline> {
    const discipline = this._manager.create(DisciplineEntity, {
      ...data,
    });

    const createdDiscipline = await this._manager.save(discipline);

    return this.convertToModel(createdDiscipline);
  }

  public async listDiscipline(): Promise<Discipline[]> {
    const discipline = await this._manager.find(DisciplineEntity);

    return discipline.map((d) => this.convertToModel(d));
  }

  public async editDiscipline(
    data: UpdateDisciplineDto
  ): Promise<Discipline | null> {
    const { id, name, instructor, patent } = data;

    const result = await this._manager.update(
      DisciplineEntity,
      { id },
      { name, instructor, patent }
    );

    if (result.affected === 0) {
      return null;
    }

    const updatedDisciplineEntity = await this._manager.findOneBy(
      DisciplineEntity,
      {
        id,
      }
    );

    if (updatedDisciplineEntity) {
      return this.convertToModel(updatedDisciplineEntity);
    }

    return null;
  }

  public async deleteDiscipline(id: string): Promise<void> {
    const result = await this._manager.delete(DisciplineEntity, { id: id });

    if (result.affected === 0) {
      throw new Error(`Failed to delete parent account with ID ${id}`);
    }
  }

  public async getById(id: string): Promise<Discipline | null> {
    const disciplineEntity = await this._manager.findOneBy(DisciplineEntity, {
      id,
    });

    if (!disciplineEntity) return null;

    return this.convertToModel(disciplineEntity);
  }

  private convertToModel(dataFromDB: DisciplineEntity): Discipline {
    return new Discipline(
      dataFromDB.id,
      dataFromDB.name,
      dataFromDB.instructor,
      dataFromDB.patent
    );
  }
}
